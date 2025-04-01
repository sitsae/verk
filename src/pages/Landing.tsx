import Hero from "../components/Hero";
import PrivatNettsideSection from "../components/PrivatNettsideSection";
import Services from "../components/Services";
import SmaaSiderSection from "../components/SmaaSiderSection";
import Process from "../components/Process";
import { useEffect } from "react";

export default function Landing() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(`${entry.target.className} is in view`);
            entry.target.classList.add("show");
          }
          if (!entry.isIntersecting) {
            console.log(`${entry.target.className} is out of view`);
          }
        });
      },
      { threshold: 1 }
    );

    const sections = document.querySelectorAll(".helpful");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <>
      <div className="section-wrapper">
        <Hero />
      </div>

      <div className="section-wrapper">
        <Process />
      </div>
      {/* prosess (1. velge den riktige løsningen for deg, 2. Utforme din nettside 3. publisere og drifte nettside.)*/}
      <div className="section-wrapper">
        <Services />
      </div>
      {/* refearanse */}
      {/* tidligere prosjekter */}
      {/* hvorfor velge oss? */}
      <div className="section-wrapper">
        <PrivatNettsideSection />
      </div>
      <div className="section-wrapper">
        <SmaaSiderSection />
      </div>
    </>
  );
}
