import { softDrinksQuery } from "./queries/softdrinks";
import { snacksQuery } from "./queries/snacks";
import { alcoholQuery } from "./queries/alcohol";

export const allQuery = `
    {
        softdrinks: ${softDrinksQuery}
        snacks: ${snacksQuery}
        alcohol: ${alcoholQuery}
    }
`;
