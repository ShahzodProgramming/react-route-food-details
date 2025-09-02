import React from "react";
import { Link } from "react-router-dom";

function About({ items }) {
  return (
    <div>
      About
      {items.map((item, i) => (
        <div key={i}>
          <Link to={`/food/${item.id}`}>
            <img src={item.img} />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default About;
