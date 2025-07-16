import { Link, useParams } from "react-router-dom";
import { BreadCrumbs } from "../components/shared/BreadCrumbs";
import { Title } from "../components/shared/Title";
import useGetSeperateNews from "../hooks/useGetSeperateNews";
import { useLang } from "../services/zustand/zusLang";
import Loader from "../components/shared/Loader";
import { CustomButton } from "../components/shared/CustomButton";
import { useScrollTop } from "@/lib/utils";

export const NewsSeperatePage = () => {
  useScrollTop();

  const localization = useLang((state) => state.activeLang.localization);
  const chooseDataLang = (en: string, ru: string) =>
    localization === "en" ? en : ru;

  let { id } = useParams();

  const { newsSeperateData, newsSeperateIsLoading } = useGetSeperateNews(
    id ?? ""
  );

  return (
    <div className="container mb-24">
      <>
        <BreadCrumbs
          second={chooseDataLang("News", "Новости")}
          path="/news"
          third={chooseDataLang("", "")}
        />
        <h2 className="h2 mb-6">
          {newsSeperateData ? newsSeperateData.title : ""}
        </h2>

        <p className="mb-8">{newsSeperateData?.published_at}</p>

        {newsSeperateData?.featured_images[0].path && (
          <img
            height={480}
            width={833}
            src={newsSeperateData?.featured_images[0].path}
            alt="картинка"
            className="mb-6 max-h-[480px] object-cover w-full"
          />
        )}

        <div
          className="seperate-news flex flex-col gap-6"
          dangerouslySetInnerHTML={{
            __html: newsSeperateData ? newsSeperateData.content_html : "",
          }}
        />

        {newsSeperateIsLoading && <Loader />}

        <Link to="/news" className="">
          <div className="mt-10">
            <CustomButton text={chooseDataLang("All news", "Все новости")} />
          </div>
        </Link>
      </>
    </div>
  );
};
