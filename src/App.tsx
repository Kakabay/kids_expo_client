import { Outlet } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";
import LanguageSync from "./lang-sync";
import { useScrollTop } from "./lib/utils";

const App = () => {
  useScrollTop();

  return (
    <div className="flex flex-col overflow-x-hidden min-h-screen tab:bg-[#FAFAFA] lg:mt-[128px] mt-20">
      <Header />

      <LanguageSync />

      <main className="flex-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;
