import clsx from 'clsx';
import { LangMenu } from './LangMenu';

export const headerMenu = [
  { title: 'Новости', link: '/news' },
  { title: 'FAQ', link: '/faq' },
  { title: 'Контакты', link: '/contacts' },
];

export const headerMenu2 = [
  { title: 'Выставка', link: '/exhibition' },
  { title: 'Участникам', link: '/participants' },
  { title: 'Посетителям', link: '/visitors' },
];

export const Header = () => {
  return (
    <header className="relative z-[3000] flex-col">
      <div className="flex items-center bg-purple text-white py-[12px] font-regular text-extraSm">
        <div className="container flex items-center justify-between">
          <p className="text-extraSm">Тел.: +99362006200</p>
          <div className="flex items-center gap-[6px]">
            <div className="flex items-center gap-x-[20px]">
              {headerMenu.map((item) => (
                <div>
                  <p
                    className={clsx('after:transition-all duration-1000 relative leading-[130%]', {
                      // 'link-border-bottom cursor-default hover:after:bg-green':
                      //   // item.link === pathname,
                      'hover:link-border-bottom hover:after:bg-[#738799]':
                        item.title === item.title,
                    })}>
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex gap-[10px]">{/* <LangMenu /> */}</div>
          </div>
        </div>
      </div>

      <div className="bg-bgWhite text-black">
        <div className="container py-[5px] flex items-center justify-between">
          <div className="flex">
            <img src="../assets/icons/flower-toy.png" alt="logo" className="mr-[5px]" />
            <div className="">
              <p className="text-#050505 font-bold text-[9px]">19–22 августа 2024</p>
              <img src="../assets/icons/logo-text.png" alt="" />
            </div>
          </div>
          <div className="flex items-center gap-x-[20px] font-medium">
            {headerMenu2.map((item) => (
              <div className="cursor-pointer">{item.title}</div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

{
  /* <header className="hidden relative z-[3000] tab:flex flex-col"> */
}
