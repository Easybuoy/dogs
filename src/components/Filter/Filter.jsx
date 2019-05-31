import React from "react";
import "./Filter.css";

export default function Filter({ breeds, onChange }) {
  return (
    <div className="filter">
      <select onChange={onChange} className="select">
          <option>SELECT BREED</option>
        {Object.keys(breeds).map(breed => {
           return <option key={breed} value={breed}>{breed.toUpperCase()}</option>
        })}
      </select>
    </div>
  );
}
