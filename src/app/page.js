import AdoptionProcess from "@/components/home/AdoptionProcess";
import FeaturedPets from "@/components/home/FeaturedPets";
import Hero from "@/components/home/Hero";
import PetCareTips from "@/components/home/PetCareTips";
import SuccessStories from "@/components/home/SuccessStories";
import Volunteers from "@/components/home/Volunteers";
import WhyAdopt from "@/components/home/WhyAdopt";
import Reveal from "@/components/shared/Reveal";

export default function HomePage() {
  return (
    <>
      <Reveal>
        <Hero />
      </Reveal>
      <Reveal delay={0.05}>
        <FeaturedPets />
      </Reveal>
      <Reveal delay={0.08}>
        <WhyAdopt />
      </Reveal>
      <Reveal delay={0.1}>
        <SuccessStories />
      </Reveal>
      <Reveal delay={0.12}>
        <PetCareTips />
      </Reveal>
      <Reveal delay={0.14}>
        <Volunteers />
      </Reveal>
      <Reveal delay={0.16}>
        <AdoptionProcess />
      </Reveal>
    </>
  );
}
