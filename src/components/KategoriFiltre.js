import React from "react";

function KategoriFiltre({ value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      <option value="Tümü">Tümü</option>
      <option value="Web">Web</option>
      <option value="Algoritma">Algoritma</option>
      <option value="CS">CS</option>
    </select>
  );
}

export default KategoriFiltre;