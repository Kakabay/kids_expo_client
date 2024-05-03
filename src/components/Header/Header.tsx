import clsx from "clsx";
import { LangMenu } from "./LangMenu";

export const headerMenu = [
  { title: "Новости", link: "/news" },
  { title: "FAQ", link: "/faq" },
  { title: "Контакты", link: "/contacts" },
];

export const headerMenu2 = [
  { title: "Выставка", link: "/exhibition" },
  { title: "Участникам", link: "/participants" },
  { title: "Посетителям", link: "/visitors" },
];

export const Header = () => {
  return (
    <header className="relative z-[3000] flex-col">
      <div className="hidden tab:flex items-center bg-purple text-white py-[12px] font-regular text-extraSm">
        <div className="container flex items-center justify-between">
          <p className="text-[13px] leading-[115%]">Тел.: +99362006200</p>
          <div className="flex items-center gap-[6px]">
            <div className="hidden tab:flex items-center gap-x-[20px]">
              {headerMenu.map((item) => (
                <div>
                  <p
                    className={clsx(
                      "after:transition-all cursor-pointer duration-1000 relative leading-[130%]",
                      {
                        // 'link-border-bottom cursor-default hover:after:bg-green':
                        //   // item.link === pathname,
                        "hover:link-border-bottom text-[13px] hover:after:bg-[#738799]":
                          item.title === item.title,
                      }
                    )}
                  >
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
            {/* <div className="flex gap-[10px]">
              <LangMenu />
            </div> */}
          </div>
        </div>
      </div>

      <div className="bg-bgWhite text-black">
        <div className="container py-[5px] flex items-center justify-between">
          <div className="flex">
            <img
              src="../assets/icons/flower-toy.svg"
              width={65}
              height={65}
              alt="logo"
              className="mr-[5px]"
            />
            <div className="">
              <p className="text-#050505 font-bold text-[9px]">
                19–22 августа 2024
              </p>
              <img src="../assets/icons/kids-expo.svg" alt="" />
            </div>
          </div>
          <div className="hidden tab:flex text-[14px] items-center gap-x-[20px] font-medium">
            {headerMenu2.map((item) => (
              <div className="cursor-pointer">{item.title}</div>
            ))}
          </div>

          <div
            // onClick={toggleMenu}
            className="flex flex-col tab:hidden cursor-pointer h-8 w-8 p-1 justify-between items-center"
          >
            <span
              className={clsx(
                "block transition-all rounded-full bg-purple w-6 h-[2px]",
                {
                  // "rotate-[45deg] translate-y-[9px]": burgerMenu,
                }
              )}
            />
            <span
              className={clsx(
                "block transition-all rounded-full bg-purple w-6 h-[2px]",
                {
                  // "opacity-0 hidden": burgerMenu,
                }
              )}
            />
            <span
              className={clsx(
                "block transition-all duration-300 rounded-full bg-purple w-6 h-[2px]",
                {
                  // "rotate-[-45deg] translate-y-[-10px]": burgerMenu,
                }
              )}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

{
  /* <header className="hidden relative z-[3000] tab:flex flex-col"> */
}
