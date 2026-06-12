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
    // Inject Google Tag Manager script dynamically
    const scriptId = 'google-analytics-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);

      // Initialize dataLayer and window.gtag
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };

      window.gtag('js', new Date());
      
      // Configuration with automatically generated page view tracking
      window.gtag('config', measurementId, {
        page_path: window.location.pathname + window.location.search,
        send_page_view: true,
      });
    }
  }, [measurementId]);

  return null;
}

/**
 * Triggers a custom Google Analytics event
 * @param action - Event action name (e.g. 'click_quote', 'select_product')
 * @param category - Event category (e.g. 'User Interaction', 'Lead Generation')
 * @param label - Optional text label (e.g. 'Super Sac', 'Navbar link')
 * @param value - Optional numeric value
 */
export function trackGAEvent(action: string, category: string, label?: string, value?: number) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
}
