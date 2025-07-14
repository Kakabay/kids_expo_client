import { HomeHero } from "@/components/shared/HomeHero";
import { PartnersSection } from "@/components/shared/PartnersSection";
import { HomeAbout } from "@/components/shared/HomeAbout";
import { HomeOffers } from "@/components/shared/HomeOffers";
import { HomeTheme } from "@/components/shared/HomeTheme";
import { HomeTime } from "@/components/shared/HomeTime";
import { HomeAddress } from "@/components/shared/HomeAddress";
import { useScrollTop } from "@/lib/utils";
import HomeNews from "@/components/shared/HomeNews";

export default function HomePage() {
  useScrollTop();

  return (
    <>
      <HomeHero />
      <HomeAbout />
      <HomeOffers />
      <HomeTheme />
      <HomeTime />
      <HomeNews />
      <PartnersSection />

      {/* <section className="mb-[50px] bg-[#f9f9f9] container flex justify-center">
        <a
          href="https://exposale.net/ru"
          target="_blank"
          className="max-w-[450px] h-auto"
        >
          <img
            src="https://exposale.net/template-admin/assets/elFinder/files/banners/728x90rus.png"
            title="Найди свою выставку на EXPOSALE.net"
          />
        </a>
      </section> */}

      <HomeAddress />
    </>
  );
}
