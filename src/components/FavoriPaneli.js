import React from "react";

function FavoriPaneli({ favoriler }) {
  return (
    <div className="favori-paneli">
      <h4>Favoriler ({favoriler.length})</h4>
      <ul>
        {favoriler.map((kitap) => (
          <li key={kitap.id}>{kitap.baslik}</li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriPaneli;