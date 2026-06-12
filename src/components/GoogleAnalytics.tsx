import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function GoogleAnalytics() {
  const measurementId = 'G-T68GYFTE14';

  useEffect(() => {
    const scriptId = 'google-analytics-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      // 1. Initialiser le dataLayer AVANT pour que Google le détecte immédiatement
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag(...args: any[]) {
        window.dataLayer.push(args);
      };

      window.gtag('js', new Date());
      
      window.gtag('config', measurementId, {
        page_path: window.location.pathname + window.location.search,
        send_page_view: true,
      });

      // 2. Injecter le script officiel
      script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
    }
  }, [measurementId]);

  return null;
}

export function trackGAEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}
