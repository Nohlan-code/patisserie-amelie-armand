import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Creations } from "@/components/Creations";
import { Artisan } from "@/components/Artisan";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Creations />
        <Artisan />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
