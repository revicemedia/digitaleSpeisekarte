export interface IConfig {
  locationName: string;
  locationStreet: string;
  locationCity: string;
  locationPLZ: number;
  locationPhone?: string;
  locationInstagram?: string;
  categoriesHeadline: string;
  searchHeadline: string;
  searchPlaceholder: string;
  newsHeadline: string;
  adminLink: string;
  options: {
    locationHasNewsSlider: boolean;
    locationHasEventSlider: boolean;
    locationHasJobSection: boolean;
  };
}
