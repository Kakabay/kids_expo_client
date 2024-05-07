import axios from 'axios';
import { GetBannersTypes } from '../types/getBannersTypes';
import { GetNewsTypes } from '../types/getNewsTypes';

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
}

export default new ExpoService();
