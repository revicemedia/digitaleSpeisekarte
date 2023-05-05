import { IConfig } from "../interfaces/ConfigInterface";

export const config: IConfig = {
  locationName: "BARbarossa",
  locationStreet: "Alte Königsberger Straße 2",
  locationCity: "Gelnhausen",
  locationPLZ: 63571,
  categoriesHeadline: "Kategorien",
  searchHeadline: "Suchen",
  searchPlaceholder: "Ich suche nach ...",
  newsHeadline: "News",
  adminLink: "https://app.contentful.com",
  options: {
    locationHasNewsSlider: true,
    locationHasEventSlider: false,
    locationHasJobSection: false,
  },
};
