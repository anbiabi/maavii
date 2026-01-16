import React from 'react';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ServicesIntro from "@/components/ServicesIntro";
import CulinaryGallery from "@/components/CulinaryGallery";
import FusionConcept from "@/components/FusionConcept";
import MenuPreview from "@/components/MenuPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesIntro />
      <MenuPreview />
      <CulinaryGallery />
      <FusionConcept />
      <Contact />
    </>
  );
}
