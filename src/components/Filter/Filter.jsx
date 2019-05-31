import React from "react";
import "./Filter.css";

import Option from "./Option";

export default function Filter({ breeds, onChange }) {
  return (
    <div className="filter">
      <select onChange={onChange} className="select">
          <option>SELECT BREED</option>
        {Object.keys(breeds).map(breed => {
          return <Option key={breed} value={breed} onChange={onChange}/>;
        })}
      </select>
    </div>
  );
}
