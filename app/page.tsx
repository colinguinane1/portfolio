import BentoGrid from "@/components/bento-grid";
import BlogList from "@/components/blog-list";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import { getAllPosts } from "@/lib/get-posts";

export default async function EnhancedPortfolioComponent() {
  const posts = await getAllPosts();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container -mt-10 mx-auto px-6 py-8">
        <Hero />
        <BentoGrid />
        <Skills />
        <Projects />

        <BlogList posts={posts} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
