import About from "@/components/About";
import Contact from "@/components/Contact";
import Details from "@/components/Details";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Venue from "@/components/Venue";
export default function Page() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Details />
      <Venue />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}
