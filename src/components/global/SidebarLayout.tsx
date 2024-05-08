import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

export const SidebarLayout = ({ children }: { children: ReactNode }) => {
  return (
    <section className="tab:bg-blueBg bg-navyBlueBg h-full">
      <div className="container h-full">
        <div className="flex w-full h-full">
          <Sidebar />
          <div className="bg-navyBlueBg pt-[20px] lg:pl-10 md:pl-6 pl-0 lg:w-[75%] w-full relative main-abs-bg h-full">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
};
