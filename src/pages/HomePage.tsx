import {
  HomeAbout,
  HomeAddress,
  HomeHero,
  HomeNews,
  HomeOffers,
  HomePartners,
  HomeTestimonials,
  HomeTheme,
  HomeTime,
} from "@/components/shared/home";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeOffers />
      <HomeTheme />
      <HomeTime />
      <HomeNews />
      <HomeTestimonials />
      <HomePartners />
      <HomeAddress />
    </>
  );
}
