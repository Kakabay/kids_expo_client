import axios from 'axios';
import { GetBannersTypes } from '../types/getBannersTypes';
import { GetNewsTypes } from '../types/getNewsTypes';

class ExpoService {
  private URL = 'https://editor.turkmenexpo.com/api/v1';

  async getBanners() {
    return await axios.get<GetBannersTypes>(`${this.URL}/banners`);
  }

  async getNews() {
    return await axios.get<GetNewsTypes>(`${this.URL}/news`);
  }
}

export default new ExpoService();
