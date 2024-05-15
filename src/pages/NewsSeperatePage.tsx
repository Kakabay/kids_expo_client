import { Link, useParams } from 'react-router-dom';
import { SidebarLayout } from '../components/global/SidebarLayout';
import { BreadCrumbs } from '../components/ui/BreadCrumbs';
import { Title } from '../components/ui/Title';
import useGetSeperateNews from '../hooks/useGetSeperateNews';
import { useLang } from '../services/zustand/zusLang';
import { Button } from '../components/ui/Button';

export const NewsSeperatePage = () => {
  const localization = useLang((state) => state.activeLang.localization);
  const chooseDataLang = (en: string, ru: string) => (localization === 'en' ? en : ru);

  let { id } = useParams();

  const { newsSeperateData, newsSeperateIsSuccess } = useGetSeperateNews(id ? id : '');

  return (
    <SidebarLayout>
      {newsSeperateIsSuccess && (
        <>
          <BreadCrumbs
            second={chooseDataLang('News', 'Новости')}
            path="/news"
            third={chooseDataLang('', '')}
          />
          <Title title={newsSeperateData ? newsSeperateData.title : ''} mb32 />

          <p className="mb-8">{newsSeperateData?.published_at}</p>

          <div
            className="seperate-news flex flex-col gap-6"
            dangerouslySetInnerHTML={{
              __html: newsSeperateData ? newsSeperateData.content_html : '',
            }}
          />

          <Link to="/news" className="">
            <div className="mt-10">
              <Button text={chooseDataLang('All news', 'Все новости')} />
            </div>
          </Link>
        </>
      )}
    </SidebarLayout>
  );
};
