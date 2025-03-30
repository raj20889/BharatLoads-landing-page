import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTA2 from "@/components/CTA2";
import ArticlePage from "@/components/ArticlePage";
import OurVendors from "@/components/OurVendors";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero />
      <Features />
      <CTA />
      <CTA2/>
      <ArticlePage/>
      <OurVendors/>
      <Footer/>
    </div>
  );
}
