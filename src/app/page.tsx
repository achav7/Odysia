import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AppsShowcase from "@/components/AppsShowcase";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black min-h-screen">
      <Header />
      <Hero />
      <AppsShowcase />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
