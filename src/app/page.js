"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Details from "@/components/Details";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Venue from "@/components/Venue";
import logo_loader from "@/images/logo_loader.gif";
import { useEffect, useState } from "react";
export default function Page() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 7000);
  }, []);
  return (
    <>
      {loading ? (
        <Loader gif={logo_loader} />
      ) : (
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
      )}
    </>
  );
}
