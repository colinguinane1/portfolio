"use client";
import Hero from "@/components/hero";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
// import BentoGrid from "@/components/bentgrid";

export default function EnhancedPortfolioComponent() {
  return (
    <div className={`min-h-screen bg-background text-foreground`}>
      <main className="container mx-auto px-6 py-8">
        <Hero />
        {/* <BentoGrid /> */}
        <Skills />

        <Projects />

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
