export const allergenQuery = `
{
    allergene: allergeneCollection {
        items {
            name
            description
            id: sys {
                id
            }
        }
    }
}
`;
