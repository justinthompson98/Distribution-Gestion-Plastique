import step1Img from '../assets/images/recuperation_etape1.jpg';
import step2Img from '../assets/images/recuperation_etape2.jpg';
import step3Img from '../assets/images/gp_step3_recycling_1780072443291.png';
import valorisationImg from '../assets/images/transparent_plastic_bags_repl_1780768347395_1780784260982.png';
import gpBrandedBagWithTire from '../assets/images/hero/hero.png';
import trashWithX from '../assets/images/avoid_landfills_trash_1780965506195.png';
import bagsDiverted from '../assets/images/bags_diverted_clean_1780965801996.png';
import recycled600lbs from '../assets/images/recycled_600lbs_clean_1780965909592.png';
import recyclingSymbol from '../assets/images/recycling_symbol_1780768362478.png';

// Importations éditables pour la section "Notre impact en chiffres" (cochées via Glisser-Déposer)
import stat1EconomieCirculaire from '../assets/images/impact_stats/stat1_economie_circulaire.png';
import stat2SacsDetournes from '../assets/images/impact_stats/stat2_sacs_detournes.png';
import stat3PoidsRecycle from '../assets/images/impact_stats/stat3_poids_recycle.png';

// Importations depuis les répertoires dédiés éditables (via Drag and Drop de l'utilisateur)
import etape3_1 from '../assets/images/programme_etape3/etape1.jpg';
import etape3_2 from '../assets/images/programme_etape3/etape2.png';
import etape3_3 from '../assets/images/programme_etape3/etape3.jpg';
import etape3_4 from '../assets/images/programme_etape3/etape4.png';
import etape3_5 from '../assets/images/programme_etape3/etape5.jpg';
import suiviImpactImg from '../assets/images/suivi_impact/suivi_impact.png';

/**
 * CONFIGURATION DES PHOTOS DU SITE
 * 
 * Ce fichier centralise toutes les images par défaut du site.
 * Pour modifier une image à l'avenir, vous pouvez :
 * 1. Écraser ou glisser-déposer directement le fichier correspondant dans son dossier dédié dans /src/assets/images/
 * 2. Ou changer l'URL ci-dessous par celle d'une nouvelle photo en ligne de votre choix (ex: Unsplash).
 */
export const siteImages = {
  // Image principale du sac GP avec pneu (Section d'accueil / Hero)
  heroBagWithTire: gpBrandedBagWithTire,

  // Programme de récupération (Étapes de la section Récupération)
  step1Delivery: step1Img,                      // Étape 1 : Nous livrons (Camion GP de livraison de sacs)
  step2Collection: step2Img,                    // Étape 2 : Vous récupérez (Rack à pneus / Stockage garage)
  step3Recycling: step3Img,                     // Étape 3 : Nous recyclons (Usine de traitement de plastique d'ici)
  
  // Étape 4 : Suivi d'impact (Plaque de certification environnementale Distribution GP remise au garage)
  step4Reports: suiviImpactImg, 

  // Galerie photo du processus de recyclage étape par étape (dans "Nous recyclons")
  recyclingSteps: [
    {
      url: etape3_1,
      title: "1. Centre de valorisation",
      desc: "Réception de vos sacs usagés et tri sélectif peHD."
    },
    {
      url: etape3_2,
      title: "2. Lavage haute température",
      desc: "Lavage intensif automatisé pour désinfecter et éliminer tous les résidus d'huile et poussière."
    },
    {
      url: etape3_3,
      title: "3. Broyage en flocons",
      desc: "Passage dans des broyeurs industriels pour transformer le plastique lavé en petits flocons réguliers."
    },
    {
      url: etape3_4,
      title: "4. Regranulation peHD",
      desc: "Fusion des flocons à haute température et traitement pour en faire des granulés prêts pour l'extrusion."
    },
    {
      url: etape3_5,
      title: "5. Extrusion de nouveaux sacs",
      desc: "Extrusion finale en fine gaine et moulage pour produire de nouveaux sacs robustes faits à 100% de matière locale."
    }
  ],

  // Images de la section Statistiques (ImpactStats.tsx)
  statPlasticsLoop: stat1EconomieCirculaire,                                                                             // Économie Circulaire (Sacs de tri)
  statBagsRecycled: stat2SacsDetournes,  // Avenir Sans Déchets (150 000 sacs détournés)
  statGarageAverage: stat3PoidsRecycle, // Performance Éco-locale (600 lbs recyclé par garage)
};
