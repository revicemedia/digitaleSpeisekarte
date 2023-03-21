import React from "react";
import { useMainContext } from "../../Context/AllContext";
import { DATA2 } from "../../interfaces/interfaces";

const Categories: React.FC = () => {
  const softdrinks: DATA2 = useMainContext();

  // const test = softdrinks.data?.softdrinks?.items;

  return (
    <>
      <div>
        {/* {test?.map(({ name, description, price, id }: any) => (
          <div key={id.id}>
            <h3>{name}</h3>
            <p>{description}</p>
            <p>{price + "€"}</p>
          </div>
        ))} */}
      </div>
    </>
  );
};

export default Categories;
