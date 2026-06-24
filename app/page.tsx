import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { About } from "@/components/sections/About";
import { Featured } from "@/components/sections/Featured";
import { Menu } from "@/components/sections/Menu";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { Chefs } from "@/components/sections/Chefs";
import { Gallery } from "@/components/sections/Gallery";
import { Testimonials } from "@/components/sections/Testimonials";
import { Reservation } from "@/components/sections/Reservation";
import { Blog } from "@/components/sections/Blog";
import { Newsletter } from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Featured />
        <Menu />
        <CtaBanner />
        <Chefs />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
