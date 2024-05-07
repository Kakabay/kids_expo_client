import { Link } from 'react-router-dom';
import { headerMenu, headerMenu2 } from '../Header/Header';
import { useLang } from '../../services/zustand/zusLang';

export const Footer = () => {
  const localization = useLang((state) => state.activeLang.localization);

  const chooseDataLang = (en: string, ru: string) => (localization === 'en' ? en : ru);

  return (
    <footer className="bg-purple text-white2">
      <div className="container py-10">
        <div className="flex sm:flex-row flex-col justify-between mb-[60px]">
          <div className="text-[14px] font-medium mb-10 md:mb-0">
            <p className="mb-5">{chooseDataLang('Organizers: ', 'Организаторы: ')}</p>
            <img src="../assets/icons/text-logo.svg" className="mb-[10px]" alt="" />
            <div className="flex items-center gap-[10px] w-[260px]">
              <img src="../assets/icons/footer-logo.png" alt="" />
              <p className="leading-[120%] font-medium">
                {chooseDataLang(
                  'The Chamber of Commerce and Industry of Turkmenistan',
                  'Торгово-промышленная палата Туркменистана',
                )}
              </p>
            </div>
          </div>

          <div className="w-full mb-10 md:mb-0 max-w-[290px] flex flex-col gap-[10px]">
            {headerMenu2
              .filter((item) => (localization === 'en' ? item.en : !item.en))
              .map((item) => (
                <Link key={item.link} to={item.link}>
                  {item.title}
                </Link>
              ))}
          </div>

          <div className="w-full max-w-[290px] flex flex-col gap-[10px]">
            {headerMenu
              .filter((item) => (localization === 'en' ? item.en : !item.en))
              .map((item) => (
                <Link key={item.link} to={item.link}>
                  {item.title}
                </Link>
              ))}
          </div>
        </div>

        <hr className="w-full border-[1px] border-[#AAAAAA] mb-[17px]" />

        <p className="text-center text-white text-[12px]">
          {chooseDataLang('©2024 IE «TurkmenExpo» ', '© 2024 ИП “ТуркменЭкспо”')}
        </p>
      </div>
    </footer>
  );
};
