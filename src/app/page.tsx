import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Certifications from "@/components/sections/Certifications";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <div className="gold-line-full mx-6 opacity-30" />
        <About />
        <div className="gold-line-full mx-6 opacity-20" />
        <Certifications />
        <div className="gold-line-full mx-6 opacity-20" />
        <Skills />
        <div className="gold-line-full mx-6 opacity-20" />
        <Projects />
        <div className="gold-line-full mx-6 opacity-20" />
        <Experience />
        <div className="gold-line-full mx-6 opacity-20" />
        <Services />
        <div className="gold-line-full mx-6 opacity-20" />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
