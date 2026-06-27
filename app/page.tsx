import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { PopularProducts } from "@/components/sections/PopularProducts";
import { CelebrationCakes } from "@/components/sections/CelebrationCakes";
import { SweetDelights } from "@/components/sections/SweetDelights";
import { ShopByCategory } from "@/components/sections/ShopByCategory";
import { NewArrivals } from "@/components/sections/NewArrivals";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { BakingStories } from "@/components/sections/BakingStories";
import { Newsletter } from "@/components/sections/Newsletter";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PopularProducts />
        <CelebrationCakes />
        <SweetDelights />
        <ShopByCategory />
        <NewArrivals />
        <WhyChooseUs />
        <BakingStories />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
