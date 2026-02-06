import React from 'react';
import Hero from "@/components/Hero";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ServicesIntro from "@/components/ServicesIntro";
import CulinaryGallery from "@/components/CulinaryGallery";
import MenuPreview from "@/components/MenuPreview";
import GroceryMarketplace from "@/components/GroceryMarketplace";
import EducationServices from "@/components/EducationServices";
import ComingSoonPreview from "@/components/ComingSoonPreview";
import ActivitiesSection from "@/components/ActivitiesSection";

export default function Home() {
    return (
        <>
            <Hero />
            <About />
            <ServicesIntro />
            <MenuPreview />
            <CulinaryGallery />
            <ActivitiesSection />
            <section id="education">
                <EducationServices />
            </section>
            <section id="grocery">
                <GroceryMarketplace />
            </section>
            <ComingSoonPreview />
            <Contact />
        </>
    );
}