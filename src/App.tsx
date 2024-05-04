import { PageLayout } from './components/PageLayout';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <div>
      <PageLayout>
        <HomePage />
      </PageLayout>
    </div>
  );
};

export default App;
