export interface IConfig {
  locationName: string;
  locationCategories: any;
  locationSeatTotal: number;
}

export const config: IConfig = {
  locationName: "Testlocation",
  locationCategories: [
    { name: "Softdrinks", icon: "drink" },
    { name: "Snacks", icon: "burger" },
    { name: "Bier", icon: "beer" },
    { name: "Bier", icon: "beer" },
    { name: "Bier", icon: "beer" },
    { name: "Bier", icon: "beer" },
  ],
  locationSeatTotal: 150,
};
