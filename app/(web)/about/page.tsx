"use client";
import AboutCTA from "@/app/components/About/AboutCTA";
import AboutHero from "@/app/components/About/AboutHero";
import AboutLucid from "@/app/components/About/AboutLucid";
import GuidingValues from "@/app/components/About/GuidingValues";
import VisionMission from "@/app/components/About/VisionMission";

export default function AboutPage() {
  return (
    <main>
      <AboutHero/>
      <AboutLucid />
      <VisionMission />
      <GuidingValues />
      <AboutCTA />
    </main>
  );
}
