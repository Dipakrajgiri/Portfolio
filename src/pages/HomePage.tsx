import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Research } from "@/components/sections/Research";
import { Articles } from "@/components/sections/Articles";
import { Achievements } from "@/components/sections/Achievements";
import { Videos } from "@/components/sections/Videos";
import { Contact } from "@/components/sections/Contact";

export function HomePage() {
  return (
    <>
      <Hero />
      <div className="section-divider" />
      <About />
      <div className="section-divider" />
      <Skills />
      <div className="section-divider" />
      <Projects />
      <div className="section-divider" />
      <Experience />
      <div className="section-divider" />
      <Research />
      <div className="section-divider" />
      <Articles />
      <div className="section-divider" />
      <Achievements />
      <div className="section-divider" />
      <Videos />
      <div className="section-divider" />
      <Contact />
    </>
  );
}
