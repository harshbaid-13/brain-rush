"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Details from "@/components/Details";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Team from "@/components/Team";
import Venue from "@/components/Venue";
import Poster from "@/components/Poster/Poster";
import logo_loader from "@/images/logo_loader.gif";
import { useEffect, useState } from "react";
export default function Page() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {loading ? <Loader gif={logo_loader} /> : <></>}
      <Poster />
      <Navbar />
      {loading ? <></> : <Hero />}
      <About />
      <Details />
      <Venue />
      <Team />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
}
