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
    // 1. Ensure window.dataLayer and window.gtag are always initialized
    window.dataLayer = window.dataLayer || [];
    if (!window.gtag) {
      window.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };
    }

    // 2. Inject Google Tag Manager script if not already present
    const scriptId = 'google-analytics-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);
    }

    // 3. Always send configuration & initial page view on mount
    window.gtag('js', new Date());
    window.gtag('config', measurementId, {
      page_path: window.location.pathname + window.location.search + window.location.hash,
      send_page_view: true,
    });

    // 4. Track local navigation (hash changes) as virtual page views for seamless single-page tests
    const handleHashChange = () => {
      if (window.gtag) {
        window.gtag('config', measurementId, {
          page_path: window.location.pathname + window.location.search + window.location.hash,
          page_title: document.title,
          send_page_view: true,
        });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
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
