import { innerQuery } from "../innerQuery";

export const softDrinksQuery = `
  softdrinksCollection {
    ${innerQuery}
  }
`;

export const searchSoftdrinkQuery = (queryParameter) => {
  return ` query {
  softdrinksCollection(where: { name: "${queryParameter}" }) {
    items {
      name
      description
      price
    }
  }
}`;
};
