import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import AwardsRow from "@/components/AwardsRow";
import TodaysSpecial from "@/components/TodaysSpecial";
import InteriorStrip from "@/components/InteriorStrip";
import Stats from "@/components/Stats";
import Specialities from "@/components/Specialities";
import ChefRecommendation from "@/components/ChefRecommendation";
import DiningEvents from "@/components/DiningEvents";
import LiveMusic from "@/components/LiveMusic";
import TransitionPlate from "@/components/TransitionPlate";
import OurStory from "@/components/OurStory";
import Testimonials from "@/components/Testimonials";
import PressStrip from "@/components/PressStrip";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <MarqueeStrip />
      <AwardsRow />
      <TodaysSpecial />
      <InteriorStrip />
      <Stats />
      <Specialities />
      <ChefRecommendation />
      <DiningEvents />
      <LiveMusic />
      <TransitionPlate />
      <OurStory />
      <Testimonials />
      <PressStrip />
      <FAQ />
      <CTASection />
    </>
  );
}
