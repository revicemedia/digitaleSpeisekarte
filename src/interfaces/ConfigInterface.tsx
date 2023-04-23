export interface IConfig {
  locationName: string;
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
