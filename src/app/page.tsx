import Authority from "@/components/authority/authority";
import Cta from "@/components/cta/cta";
import Hero from "@/components/hero/hero";
import Services from "@/components/services/service";

export default function Home(){

  return (
    <>
      <Hero />
      <Authority />
      <Services />
      {/* services */}
      {/* about */}
      <Cta servicoPadrao="nenhum" />
    </>
  )
}