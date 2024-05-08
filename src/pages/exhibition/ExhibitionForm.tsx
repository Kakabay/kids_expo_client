import { SidebarLayout } from "../../components/global/SidebarLayout";
import { BreadCrumbs } from "../../components/ui/BreadCrumbs";
import { Title } from "../../components/ui/Title";

const ExhibitionForm = () => {
  return (
    <SidebarLayout>
      <BreadCrumbs second="Участникам" third="Заявка на участие" />

      <Title title="Заявка на участие" mb32 />

      <form className="flex flex-col gap-6 w-[540px]">
        <div className="flex flex-col gap-4">
          <label htmlFor="company_name" className="form-label">
            Название фирмы<span className="text-lightRed">*</span>
          </label>
          <input name="company_name" type="text" className="form-input" />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="web_site" className="form-label">
            Web-site:
          </label>
          <input name="web-site" type="text" className="form-input" />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="address" className="form-label">
            Адрес для переписки (с индексом):
          </label>
          <textarea name="address" rows={5} className="form-input" />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="phone" className="form-label">
            Телефон:<span className="text-lightRed">*</span>
          </label>
          <input name="phone" type="tel" className="form-input" />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="email" className="form-label">
            E-mail:<span className="text-lightRed">*</span>
          </label>
          <input name="email" type="text" className="form-input" />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="contact_person" className="form-label">
            Контактное лицо (Ф.И.О.):<span className="text-lightRed">*</span>
          </label>
          <input name="contact_person" type="text" className="form-input" />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="position" className="form-label">
            Должность:<span className="text-lightRed">*</span>
          </label>
          <input name="position" type="text" className="form-input" />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="close_area" className="form-label">
            Закрытая площадь (в павильоне), кв. м:
          </label>
          <input name="close_area" type="text" className="form-input" />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="open_area" className="form-label">
            Открытая площадь, кв. м:
          </label>
          <input name="open_area" type="text" className="form-input" />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="note" className="form-label">
            Примечание:
          </label>
          <textarea name="note" rows={5} className="form-input" />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="product_info" className="form-label">
            Краткое описание продукции (демонстрируемые товары, торговые марки,
            страны):
          </label>
          <textarea name="product_info" rows={5} className="form-input" />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="trademarks" className="form-label">
            Перечень торговых марок:{" "}
          </label>
          <textarea name="trademarks" rows={5} className="form-input" />
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="country_trademarks" className="form-label">
            Страна регистрации торговых марок:
          </label>
          <input name="country_trademarks" type="text" className="form-input" />
        </div>

        <p className="mb-6 leading-[150%] text-[#676767]">
          После отправки правильно заполненной формы с Вами свяжется наш
          менеджер, который будет курировать все вопросы по участию Вашей
          компании в выставке
        </p>

        <div className="flex items-start gap-4 w-[210px]">
          <input
            name="agree"
            type="checkbox"
            className="form-input cursor-pointer"
          />
          <label htmlFor="agree" className="text-[13px] cursor-pointer">
            Даю согласие на обработку своих данных
          </label>
        </div>

        <button className="w-full py-[17px] bg-purple text-white">
          Отправить
        </button>
      </form>
    </SidebarLayout>
  );
};

export default ExhibitionForm;
