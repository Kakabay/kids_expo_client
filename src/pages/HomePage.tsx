import { PageLayout } from '../components/PageLayout';

export default function HomePage() {
  return (
    <PageLayout>
      <section>
        <img src="../assets/images/test_banner.png" alt="banner" />
      </section>

      <section>
        <div className="flex justify-between items-center"></div>
      </section>
    </PageLayout>
  );
}
