import { innerQuery } from "../innerQuery";

export const snacksQuery = `
snacksCollection {
  ${innerQuery}
}
`;
