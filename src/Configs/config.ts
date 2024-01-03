import { IConfig } from "../interfaces/ConfigInterface";

export const config: IConfig = {
  locationName: "Du & Ich",
  locationStreet: "Musterstraße 23",
  locationCity: "Musterstadt",
  locationPLZ: 56555,
  categoriesHeadline: "Kategorien",
  searchHeadline: "Suchen",
  searchPlaceholder: "Ich suche nach ...",
  newsHeadline: "News",
  adminLink: "https://app.contentful.com",
  options: {
    locationHasNewsSlider: false,
    locationHasEventSlider: false,
    locationHasJobSection: false,
  },
};
