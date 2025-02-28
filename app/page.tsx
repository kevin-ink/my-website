import Contact from "@/components/contact";
import Pitch from "@/components/pitch";
import Projects from "@/components/projects";
import About from "@/components/about";
import Journey from "@/components/journey";
import Navbar from "@/components/navbar";

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
