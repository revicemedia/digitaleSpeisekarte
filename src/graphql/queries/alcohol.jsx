import { innerQuery } from "../innerQuery";

export const alcoholQuery = `
  alcoholCollection {
    ${innerQuery}
  }
`;
