import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export function GoogleAnalytics() {
  // Activated directly in index.html with the G-T68GYFTE14 measurement ID to avoid duplicate tracks.
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
