// ID do Google Analytics 4 da J.A Segurança (conta da Elunix)
export const GA_ID = "G-TPBWGV8C08";

type EventParams = Record<string, string | number | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Envia um evento pro GA4. Se a tag não carregou (dev, bloqueador), não faz nada.
export function track(event: string, params: EventParams = {}) {
  if (typeof window === "undefined" || !window.gtag) return;
  window.gtag("event", event, params);
}
