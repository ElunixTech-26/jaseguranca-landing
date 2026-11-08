import { BsWhatsapp } from "react-icons/bs";
import { linkWhatsapp } from "@/lib/origem";

// Botão fixo de WhatsApp
// O clique é rastreado e a mensagem ajustada pelo componente Analytics.
export default function WhatsappFlutuante() {
  const href = linkWhatsapp("Olá, vim pelo site! Gostaria de um orçamento.");

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-track="botao_flutuante"
      aria-label="Falar com a J.A Segurança no WhatsApp"
      className="fixed bottom-5 right-5 z-[1000] flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <BsWhatsapp size={30} />
    </a>
  );
}
