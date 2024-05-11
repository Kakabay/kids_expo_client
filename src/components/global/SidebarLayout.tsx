import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

export const SidebarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className=" h-full">
      <div className="container h-full">
        <div className="flex w-full h-full gap-0 tab:gap-[65px]">
          <Sidebar />
          <div className="bg-[#fff] section-mb py-[20px] lg:pl-10 tab:pl-6 pl-0 lg:w-[75%] w-full relative main-abs-bg min-h-full">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
