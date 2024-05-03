import axios from 'axios';
import { GetBannersTypes } from '../types/getBannersTypes';

class ExpoService {
  private URL = 'http://editor.turkmenexpo.com/api/v1';

  // async getBanners() {
  //   return await axios.get<GetBannersTypes>(`${this.URL}/banners`, {
  //     headers: {
  //       'X-Localization': 'ru',
  //     },
  //   });
  // }
  async getBanners() {
    try {
      const response = await fetch(`${URL}/banners`, {
        headers: {
          'X-Localization': 'ru',
        },
      });

      const data = await response.json();
      return data;
    } catch (error) {}
  }

  async getNews() {
    return await axios.get<GetBannersTypes>(`${this.URL}/news`, {
      headers: {
        'X-Localization': 'ru',
      },
    });
  }
}

export default new ExpoService();
