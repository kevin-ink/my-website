import Contact from "@/components/contact";
import Navbar from "@/components/navbar";
import Pitch from "@/components/pitch";
import Projects from "@/components/projects";
import About from "@/components/about";
import Journey from "@/components/journey";

export default function Home() {
  return (
    <>
      <Navbar />
      <Pitch />
      <Projects />
      <About />
      <Contact />
      <Journey />
    </>
  );
}
