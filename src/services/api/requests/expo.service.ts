import axios from "axios";
import { GetBannersTypes } from "../types/getBannersTypes";
import { GetNewsTypes } from "../types/getNewsTypes";
import { ContactsType } from "../types/getContactsTypes";
import { FaqDataType } from "../types/getFaqTypes";
import { SeperateNewsTypes } from "../types/getSeperateNews";
import { TopicsTypes } from "../types/getTopicsType";
import { EventsDateTypes } from "../types/getEventsDate";
import { BenefitsTypes } from "../types/getBenefitsType";
import { DocsTypes } from "../types/getDocsType";
import { PartnersType } from "../types/getPartnersType";
import { EngeenerTypes } from "../types/getEngeenerTypes";
import { FooterServicesTypes } from "../types/getFooterServicesTypes";
import { PhotoTypes, VideoTypes } from "../types/getMediaType";
import { ParticipantsType } from "../types/getParticipanstType";
import { StandFormType } from "@/lib/stand-form";
import { SponsorFormType } from "@/lib/sponsor-form";
import { Testimonials } from "../types/getTestimonialsTypes";

type PostParticipantFormTypes = {
  area_is_equipped: boolean;
  // event_id: number;
  company_name: string;
  phone: string;
  email: string;
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
  private URL = "https://editor.turkmenexpo.com/api/v1";

  async getBanners(localization: string) {
    return await axios.get<GetBannersTypes>(`${this.URL}/banners`, {
      headers: {
        "Accept-Language": localization,
      },
    });
  }

  async getPartners() {
    return await axios.get<PartnersType>(`${this.URL}/partners`);
  }

  async getNews({ localization, current, perPage }: GetNewsParamsTypes) {
    return await axios.get<GetNewsTypes>(
      `${this.URL}/news?page=${current}&per_page=${perPage}`,
      {
        headers: {
          "Accept-Language": localization,
        },
      }
    );
  }

  async getSeperateNews({
    localization,
    id,
  }: {
    localization: string;
    id: string;
  }) {
    return await axios.get<SeperateNewsTypes>(`${this.URL}/news/${id}`, {
      headers: {
        "Accept-Language": localization,
      },
    });
  }

  async getContacts(localization: string) {
    return await axios.get<ContactsType>(`${this.URL}/contacts`, {
      headers: {
        "Accept-Language": localization,
      },
    });
  }

  async getFaq(localization: string, currentRadio: number) {
    return await axios.get<FaqDataType>(
      `${this.URL}/faq-headers${
        currentRadio !== 0 ? "?faq_user_group_id=" + currentRadio : ""
      }`,
      {
        headers: {
          "Accept-Language": localization,
        },
      }
    );
  }

  async getAboutExhibition(localiztion: string) {
    return await axios.get<string>(`${this.URL}/settings/about_us`, {
      headers: {
        "Accept-Language": localiztion,
      },
    });
  }

  async getVenueExhibition(localiztion: string) {
    return await axios.get<string>(`${this.URL}/settings/location`, {
      headers: {
        "Accept-Language": localiztion,
      },
    });
  }

  async getTopics(localization: string) {
    return await axios.get<TopicsTypes>(`${this.URL}/topics`, {
      headers: {
        "Accept-Language": localization,
      },
    });
  }

  async getEventDates(localization: string) {
    return await axios.get<EventsDateTypes>(
      `${this.URL}/settings/event-dates`,
      {
        headers: {
          "Accept-Language": localization,
        },
      }
    );
  }

  async getBenefits(localization: string) {
    return await axios.get<BenefitsTypes>(
      `${this.URL}/settings/benefit-items`,
      {
        headers: {
          "Accept-Language": localization,
        },
      }
    );
  }

  async getDocs(localization: string) {
    return await axios.get<DocsTypes>(`${this.URL}/docs`, {
      headers: {
        "Accept-Language": localization,
      },
    });
  }

  async getEngeener(localization: string) {
    return await axios.get<EngeenerTypes>(
      `${this.URL}/exponent-services/engineer-services`,
      {
        headers: {
          "Accept-Language": localization,
        },
      }
    );
  }

  async getStandServices(localization: string) {
    return await axios.get<EngeenerTypes>(
      `${this.URL}/exponent-services/stand-services`,
      {
        headers: {
          "Accept-Language": localization,
        },
      }
    );
  }

  async getHotels(localization: string) {
    return await axios.get<FooterServicesTypes>(
      `${this.URL}/exponent-services/hotel-accommodation`,
      {
        headers: {
          "Accept-Language": localization,
        },
      }
    );
  }

  async getPrints(localization: string) {
    return await axios.get<FooterServicesTypes>(
      `${this.URL}/exponent-services/printings`,
      {
        headers: {
          "Accept-Language": localization,
        },
      }
    );
  }

  async getFooterServices(localization: string) {
    return await axios.get<FooterServicesTypes>(
      `${this.URL}/exponent-services/late-order-block`,
      {
        headers: {
          "Accept-Language": localization,
        },
      }
    );
  }

  async getPhotos(localization: string, id: number) {
    return await axios.get<PhotoTypes>(
      `https://turkmenexpo.com/app/api/v1/categories-photos/${id}`,
      {
        headers: {
          "Accept-Language": localization,
        },
      }
    );
  }

  async getVideos(localization: string, id: number) {
    return await axios.get<VideoTypes>(
      `https://turkmenexpo.com/app/api/v1/categories-videos/${id}`,
      {
        headers: {
          "Accept-Language": localization,
        },
      }
    );
  }

  async getParticipants(localization: string) {
    return await axios.get<ParticipantsType>(
      "https://editor.turkmenexpo.com/api/v1/participants",
      {
        headers: {
          "Accept-Language": localization,
        },
      }
    );
  }
  async getTestimonials(localization: string) {
    return await axios.get<Testimonials>(
      "https://editor.turkmenexpo.com/api/v1/reviews",
      {
        headers: {
          "Accept-Language": localization,
        },
      }
    );
  }

  async postParticipantForm(data: PostParticipantFormTypes) {
    return await axios.post(
      `https://editor.turkmenexpo.com/api/v1/applications`,
      {
        ...data,
      },
      {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }

  async postStand(data: StandFormType) {
    return await axios
      .post(
        `https://editor.turkmenexpo.com/api/v1/applications/stand`,
        {
          ...data,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => res.status === 201)
      .catch(() => false);
  }
  async postSponsor(data: SponsorFormType) {
    return await axios
      .post(
        "https://editor.turkmenexpo.com/api/v1/applications/sponsor",
        {
          ...data,
        },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((res) => res.status === 201)
      .catch(() => false);
  }
}

export default new ExpoService();
