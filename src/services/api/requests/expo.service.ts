import axios from 'axios';
import { GetBannersTypes } from '../types/getBannersTypes';
import { GetNewsTypes } from '../types/getNewsTypes';
import { ContactsType } from '../types/getContactsTypes';
import { FaqDataType } from '../types/getFaqTypes';
import { SeperateNewsTypes } from '../types/getSeperateNews';
import { TopicsTypes } from '../types/getTopicsType';
import { EventsDateTypes } from '../types/getEventsDate';
import { BenefitsTypes } from '../types/getBenefitsType';
import { DocsTypes } from '../types/getDocsType';
import { PartnersType } from '../types/getPartnersType';
import { EngeenerTypes } from '../types/getEngeenerTypes';
import { FooterServicesTypes } from '../types/getFooterServicesTypes';

type PostParticipantFormTypes = {
  company_name: string;
  phone: string;
  email: string;
  area: number;
  contact_person: string;
  what_demonstrated: string;
  web_site: string;
};

type GetNewsParamsTypes = {
  localization: string;
  id?: string;
  current: number;
  perPage: number;
};

class ExpoService {
  private URL = 'https://editor.turkmenexpo.com/api/v1';

  async getBanners(localiztion: string) {
    return await axios.get<GetBannersTypes>(`${this.URL}/banners`, {
      headers: {
        'Accept-Language': localiztion,
      },
    });
  }

  async getPartners() {
    return await axios.get<PartnersType>(`${this.URL}/partners`);
  }

  async getNews({ localization, current, perPage }: GetNewsParamsTypes) {
    return await axios.get<GetNewsTypes>(
      `${this.URL}/news?page=${current ? current : 1}&per_page=${perPage}`,
      {
        headers: {
          'Accept-Language': localization,
        },
      },
    );
  }

  async getSeperateNews({ localization, id }: { localization: string; id: string }) {
    return await axios.get<SeperateNewsTypes>(`${this.URL}/news/${id}`, {
      headers: {
        'Accept-Language': localization,
      },
    });
  }

  async getContacts(localization: string) {
    return await axios.get<ContactsType>(`${this.URL}/contacts`, {
      headers: {
        'Accept-Language': localization,
      },
    });
  }

  async getFaq(localization: string, currentRadio: number) {
    return await axios.get<FaqDataType>(
      `${this.URL}/faq-headers${currentRadio !== 0 ? '?faq_user_group_id=' + currentRadio : ''}`,
      {
        headers: {
          'Accept-Language': localization,
        },
      },
    );
  }

  async getAboutExhibition(localiztion: string) {
    return await axios.get<string>(`${this.URL}/settings/about_us`, {
      headers: {
        'Accept-Language': localiztion,
      },
    });
  }

  async getVenueExhibition(localiztion: string) {
    return await axios.get<string>(`${this.URL}/settings/location`, {
      headers: {
        'Accept-Language': localiztion,
      },
    });
  }

  async getTopics(localization: string) {
    return await axios.get<TopicsTypes>(`${this.URL}/topics`, {
      headers: {
        'Accept-Language': localization,
      },
    });
  }

  async getEventDates(localization: string) {
    return await axios.get<EventsDateTypes>(`${this.URL}/settings/event-dates`, {
      headers: {
        'Accept-Language': localization,
      },
    });
  }

  async getBenefits(localization: string) {
    return await axios.get<BenefitsTypes>(`${this.URL}/settings/benefit-items`, {
      headers: {
        'Accept-Language': localization,
      },
    });
  }

  async getDocs(localization: string) {
    return await axios.get<DocsTypes>(`${this.URL}/docs`, {
      headers: {
        'Accept-Language': localization,
      },
    });
  }

  async getEngeener(localization: string) {
    return await axios.get<EngeenerTypes>(`${this.URL}/exponent-services/engineer-services`, {
      headers: {
        'Accept-Language': localization,
      },
    });
  }

  async getStandServices(localization: string) {
    return await axios.get<EngeenerTypes>(`${this.URL}/exponent-services/stand-services`, {
      headers: {
        'Accept-Language': localization,
      },
    });
  }

  async getHotels(localization: string) {
    return await axios.get<FooterServicesTypes>(
      `${this.URL}/exponent-services/hotel-accommodation`,
      {
        headers: {
          'Accept-Language': localization,
        },
      },
    );
  }

  async getPrints(localization: string) {
    return await axios.get<FooterServicesTypes>(`${this.URL}/exponent-services/printings`, {
      headers: {
        'Accept-Language': localization,
      },
    });
  }

  async getFooterServices(localization: string) {
    return await axios.get<FooterServicesTypes>(`${this.URL}/exponent-services/late-order-block`, {
      headers: {
        'Accept-Language': localization,
      },
    });
  }

  async postParticipantForm({
    company_name,
    phone,
    email,
    area,
    // response_method,
    contact_person,
    // area_is_equipped,
    what_demonstrated,
    web_site,
  }: PostParticipantFormTypes) {
    return await axios.post(
      `https://turkmenexpo.com/app/api/v1/applications`,
      {
        event_id: 3,
        company_name,
        phone,
        email,
        area,
        response_method: 1,
        contact_person,
        area_is_equipped: true,
        what_demonstrated,
        web_site,
      },
      {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
      },
    );
  }
}

export default new ExpoService();
