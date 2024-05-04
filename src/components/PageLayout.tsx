import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { ReactNode } from 'react';

export const PageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};
