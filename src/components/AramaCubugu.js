import React from "react";

function AramaCubugu({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Başlığa göre ara..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
}

export default AramaCubugu;