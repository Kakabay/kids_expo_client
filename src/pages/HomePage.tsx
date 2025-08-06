import { HomeHero } from "@/components/shared/HomeHero";
import { PartnersSection } from "@/components/shared/PartnersSection";
import { HomeAbout } from "@/components/shared/HomeAbout";
import { HomeOffers } from "@/components/shared/HomeOffers";
import { HomeTheme } from "@/components/shared/HomeTheme";
import { HomeTime } from "@/components/shared/HomeTime";
import { HomeAddress } from "@/components/shared/HomeAddress";
import HomeNews from "@/components/shared/HomeNews";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeOffers />
      <HomeTheme />
      <HomeTime />
      <HomeNews />
      <PartnersSection />
      <HomeAddress />
    </>
  );
}
