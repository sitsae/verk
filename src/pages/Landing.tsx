import Hero from "../components/Hero";
import PrivatNettsideSection from "../components/PrivatNettsideSection";
import Services from "../components/Services";
import SmaaSiderSection from "../components/SmaaSiderSection";
import Process from "../components/Process";

export default function Landing() {
  return (
    <>
      <Hero />
      <Process />
      {/* prosess (1. velge den riktige løsningen for deg, 2. Utforme din nettside 3. publisere og drifte nettside.)*/}
      <Services />
      {/* refearanse */}
      {/* tidligere prosjekter */}
      {/* hvorfor velge oss? */}
      <PrivatNettsideSection />
      <SmaaSiderSection />
    </>
  );
}
