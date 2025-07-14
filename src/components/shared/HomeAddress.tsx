export const HomeAddress = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 container items-center mb-24">
      <div className="">
        <h2 className="text-3xl font-bold mb-6">Адрес ТПП Туркменистана</h2>
        <p className="text-text-secondary text-base">
          Отчет Kids Expo 2024 – одного из крупнейшего мероприятия для индустрии
          детских товаров иразвлечений. В нем представлен анализ посещаемости,
          данные о странах-участниках, оценка удовлетворенности гостей, а также
          ключевые тренды, аналитика рынка, инсайты отэкспертов, которые
          формируют будущее детской индустрии.
        </p>
      </div>

      <div className="w-full h-[338px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3148.67827952586!2d58.29659607507902!3d37.8912058554459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f7003944259cb1d%3A0xafc893357e4b0d2!2z0KLQvtGA0LPQvtCy0L4t0L_RgNC-0LzRi9GI0LvQtdC90L3QsNGPINC_0LDQu9Cw0YLQsCDQotGD0YDQutC80LXQvdC40YHRgtCw0L3QsA!5e0!3m2!1sru!2s!4v1713164734635!5m2!1sru!2s"
          className="inset-0 size-full"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        />
      </div>
    </section>
  );
};
