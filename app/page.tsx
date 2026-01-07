"use client";
import Contact from "./components/Contact";
import { CommunitySection } from "./components/Home/Community";
import HeroBanner from "./components/Home/HeroBanner";
import { LogoMarquee } from "./components/Home/LogoMarquee";
import { TrainingPlacements } from "./components/Home/TrainingPlacement";
import { TrainingSection } from "./components/Home/TrainingSection";
import WhatWeDoSection from "./components/Home/WhatWeDo";
import WhyChooseSection from "./components/Home/WhyChooseUs";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <WhyChooseSection />
      <TrainingSection />
      <WhatWeDoSection />
      <LogoMarquee />
      <TrainingPlacements/>
      <CommunitySection/>
      <Contact />
    </>
  );
}
