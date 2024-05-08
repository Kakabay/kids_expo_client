import { Outlet } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <div className="overflow-x-hidden h-full">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
