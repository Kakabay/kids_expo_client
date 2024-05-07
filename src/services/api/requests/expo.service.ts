import axios from 'axios';
import { GetBannersTypes } from '../types/getBannersTypes';
import { GetNewsTypes } from '../types/getNewsTypes';
import { useLang } from '../../zustand/zusLang';

class ExpoService {
  private URL = 'https://editor.turkmenexpo.com/api/v1';

  async getBanners(localiztion: string) {
    return await axios.get<GetBannersTypes>(`${this.URL}/banners`, {
      headers: {
        Accept: 'application/json',
        'X-Localization': localiztion,
      },
    });
  }

  async getNews() {
    return await axios.get<GetNewsTypes>(`${this.URL}/news`, {});
  }
}

export default new ExpoService();
