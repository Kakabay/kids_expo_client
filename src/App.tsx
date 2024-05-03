import { useQuery } from '@tanstack/react-query';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import HomePage from './pages/HomePage';
import expoService from './api/services/expo.service';
import { GetBannersTypes } from './api/types/getBannersTypes';

const App = () => {
  return (
    <div>
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default App;
