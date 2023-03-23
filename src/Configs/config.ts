export interface IConfig {
    locationName: string;
    locationCategories: string[];
    locationSeatTotal: number;
}

export const config: IConfig = {
    locationName: "Testlocation",
    locationCategories: [
        "Softdrinks", "Snacks"
    ],
    locationSeatTotal: 150
}