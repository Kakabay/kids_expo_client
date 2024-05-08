import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

export const SidebarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="tab:bg-blueBg bg-navyBlueBg h-full">
      <div className="container h-full section-mb">
        <div className="flex w-full h-full gap-[100px]">
          <Sidebar />
          <div className="bg-white py-[20px] lg:pl-10 md:pl-6 pl-0 lg:w-[75%] w-full relative main-abs-bg min-h-full">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
