/**
 * Compresses an image in the browser using HTML5 Canvas.
 * This converts large user-uploaded image files or camera snapshots into lightweight compressed JPEGs (around 15KB - 40KB).
 * This completely avoids the browser's 5MB localStorage limit and prevents the "QuotaExceededError".
 */
export function compressImage(
  dataUrl: string,
  maxWidth: number = 700,
  maxHeight: number = 700,
  quality: number = 0.6
): Promise<string> {
  return new Promise((resolve) => {
    // If it is an external URL (not raw base64 or file/blob payload), avoid canvas proxying
    if (!dataUrl.startsWith('data:')) {
      resolve(dataUrl);
      return;
    }

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = dataUrl;
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        let width = img.width;
        let height = img.height;

        // Maintain aspect ratio while sizing down
        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext('2d');
        if (!ctx) {
          resolve(dataUrl); // Fallback to uncompressed if canvas context is unavailable
          return;
        }

        // Fill background with white in case image contains transparency (PNG to JPEG conversion)
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, width, height);

        ctx.drawImage(img, 0, 0, width, height);

        // Convert to high-performance compressed JPEG format
        const compressedDataUrl = canvas.toDataURL('image/jpeg', quality);
        resolve(compressedDataUrl);
      } catch (err) {
        console.error("Canvas image compression failed, falling back to original", err);
        resolve(dataUrl);
      }
    };
    img.onerror = () => {
      resolve(dataUrl);
    };
  });
}
