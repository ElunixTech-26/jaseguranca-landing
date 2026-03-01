import Authority from "@/components/authority/authority";
import Cta from "@/components/cta/cta";
import Faq from "@/components/faq/faq";
import Hero from "@/components/hero/hero";
import Services from "@/components/services/service";
import Sobre from "@/components/sobre/sobre";
import Testimonials from "@/components/testimonials/testimonials";

export default function Home(){

  return (
    <>
      <Hero />
      <Authority />
      <Services />
      <Sobre />
      {/* <Testimonials /> */}
      <Cta servicoPadrao="nenhum" />
      <Faq />
    </>
  )
}