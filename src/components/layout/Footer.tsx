import { FC } from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { SubscribeForm } from "../shared/SubscribeForm";
import { useTranslate } from "@/lib/useTranslate";

export const Footer: FC = () => {
  const rights = useTranslate("rightsReserved");

  return (
    <footer>
      <div className="py-5 bg-primary text-text-on">
        <div className="flex container flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-6 md:items-end md:justify-between items-center">
            <img src="/logo.svg" alt="" />

            <div className="flex items-center gap-6">
              <Link
                target="_blank"
                to="https://www.facebook.com/profile.php?id=61567254728028"
              >
                <Facebook />
              </Link>

              <Link
                target="_blank"
                to="https://www.instagram.com/turkmenexpo_tm?igsh=bnhkOWpmNWcwcHBq"
              >
                <Instagram />
              </Link>

              <Link
                target="_blank"
                to="https://www.linkedin.com/company/turkmen-expo"
              >
                <Linkedin />
              </Link>

              {/* <Link
                target="_blank"
                to="https://x.com/turkmenexpo?t=D-XSa8d0AC8GAv5peAzteA&s=09"
              >
                <Twitter />
              </Link> */}
            </div>
          </div>

          <hr />

          <h5 className="text-base text-center normal">{rights}</h5>
        </div>
      </div>
    </footer>
  );
};
