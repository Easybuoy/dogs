import React from "react";

export default function Option({ value }) {
  return (
    <>
      <option value={value}>{value.toUpperCase()}</option>
    </>
  );
}
