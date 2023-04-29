export interface IConfig {
  locationName: string;
  locationStreet: string;
  locationCity: string;
  locationPLZ: number;
  categoriesHeadline: string;
  searchHeadline: string;
  searchPlaceholder: string;
  eventsHeadline: string;
  options: {
    locationHasNewsSlider: boolean;
    locationHasEventSlider: boolean;
    locationHasJobSection: boolean;
  };
}
