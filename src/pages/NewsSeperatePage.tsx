import { Link, useParams } from 'react-router-dom';
import { SidebarLayout } from '../components/global/SidebarLayout';
import { BreadCrumbs } from '../components/ui/BreadCrumbs';
import { Title } from '../components/ui/Title';
import useGetSeperateNews from '../hooks/useGetSeperateNews';
import { useLang } from '../services/zustand/zusLang';
import { Button } from '../components/ui/Button';
import { useEffect } from 'react';
import Loader from '../components/Loader';
import { CustomButton } from '../components/ui/CustomButton';

export const NewsSeperatePage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const localization = useLang((state) => state.activeLang.localization);
  const chooseDataLang = (en: string, ru: string) => (localization === 'en' ? en : ru);

  let { id } = useParams();

  const { newsSeperateData, newsSeperateIsLoading } = useGetSeperateNews(id ? id : '');

  return (
    <SidebarLayout>
      <>
        <BreadCrumbs
          second={chooseDataLang('News', 'Новости')}
          path="/news"
          third={chooseDataLang('', '')}
        />
        <Title title={newsSeperateData ? newsSeperateData.title : ''} mb32 />

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
            __html: newsSeperateData ? newsSeperateData.content_html : '',
          }}
        />

        {newsSeperateIsLoading && <Loader />}

        <Link to="/news" className="">
          <div className="mt-10">
            <CustomButton text={chooseDataLang('All news', 'Все новости')} />
          </div>
        </Link>
      </>
    </SidebarLayout>
  );
};
