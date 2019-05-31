import React from "react";
import "./Dog.css";

export default function Dog({ image, getDogs,url }) {
  return (
    <div className="dogDiv">
      <img src={image} alt="dog" />
      <button onClick={() => getDogs(url)} className="button">Next</button>
    </div>
  );
}
