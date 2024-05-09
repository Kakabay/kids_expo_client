import { Outlet } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';

const App = () => {
  return (
    <div className="flex flex-col overflow-x-hidden h-full">
      <Header />

      <div className="flex-auto min-h-[100%]">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default App;
