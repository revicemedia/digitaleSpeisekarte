import React from "react";
import Element from "./Element/Element";
import { useMainContext } from "../../Context/AllContext";

const Elements: React.FC = () => {
  
  const conti = useMainContext();

  console.log(conti);

  // const test = softdrinks.data?.softdrinks?.items;

  return (
    <div>
      {conti.data &&
          conti.data?.softdrinks?.items.map((item: any, index: any) => (
            <div key={index}>{item.name}<Element /></div>
          ))
        }
    </div>
  );
};

export default Elements;
