export interface DATA {
  snacks?: productDATA;
  softdrinks?: productDATA;
  alcohol?: productDATA;
}

export interface DATA2 {
  data?: {
    snacks?: productDATA;
    softdrinks?: productDATA;
    alcohol?: productDATA;
  };
}

export interface productDATA {
  items: [
    name: string,
    description: string,
    price: number,
    id: {
      id: number;
    }
  ];
}

// export interface allergenDATA {
//   name: string;
//   description: string;
//   id: {
//     id: number;
//   };
// }
