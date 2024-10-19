"use client";

import BentoGrid from "@/components/bento-grid";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function EnhancedPortfolioComponent() {
  return (
    <div className={`min-h-screen bg-background text-foreground`}>
      <main className="container -mt-10 mx-auto px-6 py-8">
        <Hero />
        <BentoGrid />
        <Skills />

        <Projects />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
