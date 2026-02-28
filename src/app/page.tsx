import Authority from "@/components/authority/authority";
import Cta from "@/components/cta/cta";
import Faq from "@/components/faq/faq";
import Hero from "@/components/hero/hero";
import Services from "@/components/services/service";
import Sobre from "@/components/sobre/sobre";

export default function Home(){

  return (
    <>
      <Hero />
      <Authority />
      <Services />
      <Sobre />
      {/* testimonials & partnerships */}
      <Cta servicoPadrao="nenhum" />
      <Faq />
    </>
  )
}