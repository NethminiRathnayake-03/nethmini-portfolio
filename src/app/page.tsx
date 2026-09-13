import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="relative bg-bg px-6 pb-24 md:px-14">
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
    </main>
  );
}
