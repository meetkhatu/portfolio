import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import About from './Components/About'
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


export default function Home() {
  return (
   <>
    <Navbar />
    <Hero />
    <About />
    <Portfolio />
    <Skills />
    <Contact />
    <Footer />
   </>
  );
}
