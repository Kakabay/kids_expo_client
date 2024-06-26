import { Link } from 'react-router-dom';
import { useLang } from '../../services/zustand/zusLang';

export const BreadCrumbs = ({
  second,
  third,
  path,
}: {
  second: string;
  third?: string;
  path?: string;
  path2?: string;
  cursor?: boolean;
}) => {
  const localization = useLang((state) => state.activeLang.localization);

  const chooseDataLang = (en: string, ru: string) => (localization === 'en' ? en : ru);

  return (
    <div className="text-[12px] text-[#8C8C8C] flex items-center mob:mb-6 mb-5">
      <Link to={'/'}>{chooseDataLang('Home', 'Главная')}</Link>

      <p className="px-1">/</p>

      {third ? <Link to={path ? path : ''}>{second}</Link> : <p>{second}</p>}

      {third && <p className="px-1">/</p>}

      {third && <p>{third}</p>}
    </div>
  );
};
