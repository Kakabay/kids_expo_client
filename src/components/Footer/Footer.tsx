import { Link } from 'react-router-dom';
import { headerMenu, headerMenu2 } from '../Header/Header';

export const Footer = () => {
  return (
    <footer className="bg-purple text-white2">
      <div className="container py-10">
        <div className="flex justify-between mb-[60px]">
          <div className="text-[14px] font-medium">
            <p className="mb-5">Организаторы:</p>
            <img src="../assets/icons/text-logo.svg" className="mb-[10px]" alt="" />
            <div className="flex items-center gap-[10px] w-[260px]">
              <img src="../assets/icons/footer-logo.png" alt="" />
              <p className="leading-[120%] font-medium">
                Торгово-промышленная палата Туркменистана
              </p>
            </div>
          </div>

          <div className="w-full max-w-[290px] flex flex-col gap-[10px]">
            {headerMenu2.map((item) => (
              <Link to={item.link}>{item.title}</Link>
            ))}
          </div>

          <div className="w-full max-w-[290px] flex flex-col gap-[10px]">
            {headerMenu.map((item) => (
              <Link to={item.link}>{item.title}</Link>
            ))}
          </div>
        </div>

        <hr className="w-full border-[1px] border-[#AAAAAA] mb-[17px]" />

        <p className="text-center text-white text-[10px]">© 2024 ИП “ТуркменЭкспо”</p>
      </div>
    </footer>
  );
};
