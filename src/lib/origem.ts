// Marca quem chegou pelo anúncio do Google Ads, pra mensagem do WhatsApp avisar o técnico.

export const NUMERO_WHATSAPP = "555183490527";

const CHAVE = "ja_origem_anuncio";
const VALIDADE_MS = 30 * 24 * 60 * 60 * 1000; // 30 dias, mesma janela de conversão do Ads

const MSG_SITE = "Olá, vim pelo site!";
const MSG_ANUNCIO = "Olá, vi o anúncio no Google!";

// Chamar uma vez ao carregar a página: se a URL tem marca de anúncio, guarda.
export function registrarOrigem() {
  if (typeof window === "undefined") return;
  const p = new URLSearchParams(window.location.search);
  const veioDoAnuncio =
    p.has("gclid") || p.has("gbraid") || p.has("wbraid") ||
    (p.get("utm_source") === "google" && p.get("utm_medium") === "cpc");
  if (!veioDoAnuncio) return;
  try {
    localStorage.setItem(CHAVE, String(Date.now()));
  } catch {
    // navegador sem storage: segue sem a marca
  }
}

export function veioDoAnuncio(): boolean {
  if (typeof window === "undefined") return false;
  try {
    const salvo = Number(localStorage.getItem(CHAVE));
    return !!salvo && Date.now() - salvo < VALIDADE_MS;
  } catch {
    return false;
  }
}

// Saudação inicial da mensagem, conforme a origem
export function saudacao(): string {
  return veioDoAnuncio() ? MSG_ANUNCIO : MSG_SITE;
}

// Troca "vim pelo site" por "vi o anúncio" num link wa.me já pronto
export function ajustarLinkWhatsapp(href: string): string {
  if (!veioDoAnuncio()) return href;
  try {
    const url = new URL(href);
    const texto = url.searchParams.get("text") ?? "";
    const novo = texto.includes(MSG_SITE)
      ? texto.replace(MSG_SITE, MSG_ANUNCIO)
      : `${MSG_ANUNCIO} ${texto}`.trim();
    // Monta na mão com encodeURIComponent: searchParams troca espaço por "+"
    return `${url.origin}${url.pathname}?text=${encodeURIComponent(novo)}`;
  } catch {
    return href;
  }
}

export function linkWhatsapp(mensagem: string): string {
  return `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensagem)}`;
}
