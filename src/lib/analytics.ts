// ID do Google Analytics 4 da J.A Segurança (conta da Elunix)
export const GA_ID = "G-TPBWGV8C08";

// Tag do Google Ads da J.A (conversões direto no Ads, sem depender da importação do GA4)
export const ADS_ID = "AW-17913409566";

// Evento do GA4 -> rótulo da ação de conversão no Ads
const ADS_CONVERSOES: Record<string, string> = {
  clique_whatsapp: "", // ação "WhatsApp - J.A"
  envio_formulario: "", // ação "Formulário - J.A"
};

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

  // Se o evento também é conversão no Ads, avisa o Ads
  const rotulo = ADS_CONVERSOES[event];
  if (ADS_ID && rotulo) {
    window.gtag("event", "conversion", { send_to: `${ADS_ID}/${rotulo}` });
  }
}
