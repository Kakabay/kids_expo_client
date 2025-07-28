import { Outlet } from "react-router-dom";
import { Header } from "./components/layout/Header";
import { Footer } from "./components/layout/Footer";

const App = () => {
  return (
    <div className="flex flex-col overflow-x-hidden min-h-screen tab:bg-[#FAFAFA]">
      <Header />

      <main className="flex-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default App;
