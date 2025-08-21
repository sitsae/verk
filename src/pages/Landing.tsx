import Hero from "../components/Hero";
import Price from "../components/Price";
import Services from "../components/Services";
import About from "../components/About";
import Process from "../components/Process";
import Footer from "../components/Footer";
import { useEffect } from "react";
import Responsive from "../components/Responsive";

export default function Landing() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );
    const aboutItems = document.querySelectorAll("#about-wrapper > .right");
    const sections = document.querySelectorAll(".helpful");

    aboutItems.forEach((item) => observer.observe(item));
    sections.forEach((section) => observer.observe(section));

    return () => {
      aboutItems.forEach((item) => observer.unobserve(item));
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <>
      <div className="section-wrapper">
        <Hero />
      </div>
      <div className="section-wrapper about">
        <About />
      </div>
      <div className="section-wrapper responsive">
        <Responsive />
      </div>
      <div className="section-wrapper">
        <Process />
      </div>
      {/* prosess (1. velge den riktige løsningen for deg, 2. Utforme din nettside 3. publisere og drifte nettside.)*/}
      <div className="section-wrapper services">
        <Services />
      </div>
      {/* refearanse */}
      {/* tidligere prosjekter */}
      {/* hvorfor velge oss? */}
      <div className="section-wrapper price">
        <Price />
      </div>

      <div className="section-wrapper footer">
        <Footer />
      </div>
    </>
  );
}
