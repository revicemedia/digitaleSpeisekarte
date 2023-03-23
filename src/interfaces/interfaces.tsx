export interface DATA {
  data?: {
    snacks?: productDATA;
    softdrinks?: productDATA;
    alcohol?: productDATA;
  }
}

export interface DATA2 {
  data?: {
    snacks?: productDATA;
    softdrinks?: productDATA;
    alcohol?: productDATA;
  };
  error?: string | null;
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
