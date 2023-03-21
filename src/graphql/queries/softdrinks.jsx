import { innerQuery } from "../innerQuery";

export const softDrinksQuery = `
  softdrinksCollection {
    ${innerQuery}
  }
`;
