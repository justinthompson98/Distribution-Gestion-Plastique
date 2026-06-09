import express from "express";
import path from "path";
import fs from "fs";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // JSON request body parser
  app.use(express.json());

  // Ensures data storage folder exists for submissions
  const dataDir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }

  const submissionsPath = path.join(dataDir, "submissions.json");

  // API Route: Handle Lead/Quote Form Submissions
  app.post("/api/quote", async (req, res) => {
    try {
      const {
        garageName,
        contactName,
        phone,
        email,
        bagType,
        customLogo,
        estimatedRolls,
        message,
      } = req.body;

      // Validate required inputs
      if (!garageName || !contactName || !phone || !email || !bagType) {
        return res.status(400).json({
          success: false,
          error: "Veuillez remplir tous les champs obligatoires.",
        });
      }

      const submission = {
        id: `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        createdAt: new Date().toISOString(),
        garageName,
        contactName,
        phone,
        email,
        bagType,
        customLogo: !!customLogo,
        estimatedRolls: Number(estimatedRolls),
        message: message || "",
      };

      // 1. Permanently persist lead on server workspace disk
      let existingList = [];
      if (fs.existsSync(submissionsPath)) {
        try {
          const raw = fs.readFileSync(submissionsPath, "utf-8");
          existingList = JSON.parse(raw || "[]");
        } catch (e) {
          existingList = [];
        }
      }
      existingList.push(submission);
      fs.writeFileSync(submissionsPath, JSON.stringify(existingList, null, 2), "utf-8");

      console.log(`[Distribution GP] New submission received & saved: ${garageName}`);

      // 2. Email Delivery Action
      const hasFormspree = !!process.env.FORMSPREE_URL;
      const hasSMTP = 
        process.env.SMTP_HOST && 
        process.env.SMTP_USER && 
        process.env.SMTP_PASS;

      let emailStatus = "not_configured";

      if (hasFormspree) {
        try {
          const formspreeUrl = process.env.FORMSPREE_URL;
          console.log(`[Distribution GP] Forwarding submission to Formspree: ${formspreeUrl}`);

          const totalSacs = Number(estimatedRolls) * 200;
          const greenContribution = (totalSacs * (5000 / 30000)).toFixed(1);

          const formspreePayload = {
            subject: `🚨 Demande de Soumission en ligne - ${garageName}`,
            "Nom du garage": garageName,
            "Nom du contact": contactName,
            "Téléphone": phone,
            "Adresse Courriel": email,
            "Type de sac": bagType,
            "Impression personnalisée (Logo)": customLogo ? "Oui (Requis)" : "Non (Neutre)",
            "Volume de rouleaux estimé": `${estimatedRolls} rouleaux (~${totalSacs} sacs)`,
            "Plastique durable recyclé": `+${greenContribution} lbs`,
            "Message / Informations": message || "Aucun message supplémentaire."
          };

          const fsResponse = await fetch(formspreeUrl!, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: JSON.stringify(formspreePayload),
          });

          if (fsResponse.ok) {
            emailStatus = "sent_formspree";
            console.log(`[Distribution GP] Formspree dispatch succeeded.`);
          } else {
            const errText = await fsResponse.text();
            console.error(`[Distribution GP] Formspree dispatch status ${fsResponse.status}:`, errText);
            emailStatus = "failed_formspree";
          }
        } catch (fsError) {
          console.error("[Distribution GP] Failed to dispatch via Formspree:", fsError);
          emailStatus = "failed_formspree";
        }
      }

      // Fallback to SMTP if Formspree is not set or if it failed to send
      if (emailStatus !== "sent_formspree" && hasSMTP) {
        try {
          const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 587),
            secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
            auth: {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS,
            },
          });

          const totalSacs = Number(estimatedRolls) * 200;
          const greenContribution = (totalSacs * (5000 / 30000)).toFixed(1);

          const clientDestination = process.env.SMTP_RECEIVER_EMAIL || "info@distributiongp.ca";
          const userMetaEmail = "justinthompson98@icloud.com";

          const mailBody = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #1f2937; max-width: 600px; margin: 0 auto; border: 1px solid #e5e7eb; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
              <div style="background-color: #064e3b; padding: 24px; text-align: center; color: #ffffff;">
                <h1 style="margin: 0; font-size: 20px; letter-spacing: 0.5px;">DISTRIBUTION GP</h1>
                <p style="margin: 4px 0 0 0; font-size: 13px; color: #a7f3d0; font-weight: bold;">Nouvelle Demande de Soumission B2B</p>
              </div>
              <div style="padding: 24px;">
                <p style="font-size: 15px; margin-top: 0;">Bonjour,</p>
                <p style="font-size: 14px;">Une nouvelle demande de soumission a été soumise depuis le formulaire en ligne de votre site web :</p>
                
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 14px;">
                  <tr style="border-bottom: 1px solid #f3f4f6;">
                    <td style="padding: 10px 0; font-weight: bold; color: #4b5563; width: 45%;">Concession / Garage :</td>
                    <td style="padding: 10px 0; font-weight: bold; color: #111827;">${garageName}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f3f4f6;">
                    <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">Contact :</td>
                    <td style="padding: 10px 0; color: #111827;">${contactName}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f3f4f6;">
                    <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">Téléphone :</td>
                    <td style="padding: 10px 0; color: #111827;"><a href="tel:${phone}" style="color: #059669; text-decoration: none; font-weight: bold;">${phone}</a></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f3f4f6;">
                    <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">Courriel :</td>
                    <td style="padding: 10px 0; color: #111827;"><a href="mailto:${email}" style="color: #059669; text-decoration: none; font-weight: bold;">${email}</a></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f3f4f6;">
                    <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">Épaisseur souhaitée :</td>
                    <td style="padding: 10px 0; color: #111827; font-weight: 600;">${bagType}</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f3f4f6;">
                    <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">Impression Logo personnalisé :</td>
                    <td style="padding: 10px 0; color: #111827;"><span style="background-color: ${customLogo ? "#ecfdf5" : "#f3f4f6"}; color: ${customLogo ? "#047857" : "#4b5563"}; padding: 3px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">${customLogo ? "OUI (Requis)" : "NON (Sacs Neutres)"}</span></td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f3f4f6;">
                    <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">Volume Estimé :</td>
                    <td style="padding: 10px 0; color: #111827; font-weight: bold;">${estimatedRolls} rouleaux (${totalSacs} sacs)</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #f3f4f6;">
                    <td style="padding: 10px 0; font-weight: bold; color: #4b5563;">Rapport Éco circulaire estimé :</td>
                    <td style="padding: 10px 0; color: #047857; font-weight: bold;">+${greenContribution} lbs de plastique circulaire</td>
                  </tr>
                </table>

                <div style="background-color: #f9fafb; border-left: 4px solid #10b981; padding: 12px 16px; margin: 20px 0; border-radius: 0 8px 8px 0;">
                  <strong style="font-size: 12px; color: #4b5563; text-transform: uppercase; letter-spacing: 0.5px;">Message du client :</strong>
                  <p style="margin: 8px 0 0 0; font-size: 13.5px; font-style: italic; color: #1f2937;">${message ? `"${message}"` : "Aucune information supplémentaire fournie."}</p>
                </div>

                <div style="text-align: center; margin-top: 30px;">
                  <a href="mailto:${email}?subject=Soumission Distribution GP - ${garageName}" style="background-color: #10b981; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 8px; font-weight: bold; font-size: 14px; display: inline-block;">Répondre par Courriel</a>
                </div>
              </div>
              <div style="background-color: #f3f4f6; padding: 15px; text-align: center; font-size: 11px; color: #9ca3af; border-top: 1px solid #e5e7eb;">
                Ce courriel a été généré automatiquement par votre site de Distribution GP.
              </div>
            </div>
          `;

          // Mail list (Main recipient + backup metalink copy)
          const recipients = [clientDestination, userMetaEmail].join(", ");

          await transporter.sendMail({
            from: `"Site Web Distribution GP" <${process.env.SMTP_USER}>`,
            to: recipients,
            subject: `🚨 Demande de Soumission en ligne - ${garageName}`,
            html: mailBody,
          });

          emailStatus = "sent";
          console.log(`[Distribution GP] Notification email successfully sent to recipients!`);
        } catch (mailError) {
          console.error("[Distribution GP] Failed to dispatch SMTP email:", mailError);
          emailStatus = "failed_error";
        }
      } else if (!hasFormspree) {
        console.warn("[Distribution GP] SMTP properties and Formspree URL missing in env. Submission stored safely in submissions.json.");
      }

      res.status(200).json({
        success: true,
        emailStatus,
        message: "Soumission enregistrée et sauvegardée avec succès.",
      });
    } catch (error: any) {
      console.error("[Distribution GP] Error creating submission:", error);
      res.status(500).json({
        success: false,
        error: "Une erreur interne s'est produite lors du traitement de votre soumission.",
      });
    }
  });

  // Serve static submissions.json file via secure API endpoint for validation
  app.get("/api/quotes-ledger", (req, res) => {
    try {
      if (fs.existsSync(submissionsPath)) {
        const raw = fs.readFileSync(submissionsPath, "utf-8");
        return res.json(JSON.parse(raw || "[]"));
      }
      res.json([]);
    } catch (e) {
      res.status(500).json({ error: "Échec de lecture des soumissions" });
    }
  });

  // Vite middleware for assets/routes fallback in development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Production statics
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Distribution GP Server] Full-Stack Server active on http://0.0.0.0:${PORT}`);
  });
}

startServer();
