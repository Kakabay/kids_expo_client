import axios from 'axios';
import { GetBannersTypes } from '../types/getBannersTypes';
import { GetNewsTypes } from '../types/getNewsTypes';

type PostParticipantFormTypes = {
  company_name: string;
  phone: string;
  email: string;
  area: number;
  contact_person: string;
  what_demonstrated: string;
  web_site: string;
};

class ExpoService {
  private URL = 'https://editor.turkmenexpo.com/api/v1';

  async getBanners(localiztion: string) {
    return await axios.get<GetBannersTypes>(`${this.URL}/banners`, {
      headers: {
        'Accept-Language': localiztion,
        // 'X-Localization': localiztion,
      },
    });
  }

  async getNews(localiztion: string) {
    return await axios.get<GetNewsTypes>(`${this.URL}/news`, {
      headers: {
        'Accept-Language': localiztion,
        // 'X-Localization': localiztion,
      },
    });
  }

  async getAboutExhibition(localiztion: string) {
    return await axios.get<string>(`${this.URL}/settings/about_us`, {
      headers: {
        'Accept-Language': localiztion,
        // 'X-Localization': localiztion,
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
