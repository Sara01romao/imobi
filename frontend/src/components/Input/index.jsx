import React from "react";
import "./styles.css";

export function Input({ type, id, value, setChange }) {
  return (
    <input
      type={type}
      id={id}
      value={value}
      onChange={(e) => setChange(e.target.value)}
    />
  );
}
