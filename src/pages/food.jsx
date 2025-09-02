import { div } from "framer-motion/client";
import React from "react";
import { useParams } from "react-router-dom";

function Food({ items }) {
  const { id } = useParams();

  console.log(items);

  const product = items.find((item) => item.id === parseInt(id));
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.img} alt="Image of a product" />
    </div>
  );
}

export default Food;
