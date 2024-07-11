import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="flex flex-col overflow-x-hidden min-h-screen bg-[#f9f9f1]">
      <Header />

      <div className="flex-auto">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default App;
