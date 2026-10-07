import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Manifesto from "@/components/Manifesto";
import Destinations from "@/components/Destinations";
import Featured from "@/components/Featured";
import Experiences from "@/components/Experiences";
import Bespoke from "@/components/Bespoke";
import Stories from "@/components/Stories";
import Journal from "@/components/Journal";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Manifesto />
        <Destinations />
        <Featured />
        <Experiences />
        <Bespoke />
        <Stories />
        <Journal />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
