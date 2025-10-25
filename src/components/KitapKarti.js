import React from "react";

function KitapKarti({ kitap, favorideMi, onFavoriDegistir }) {
  const { baslik, yazar, kategori } = kitap;
  return (
    <div className="kitap-karti">
      <h4>{baslik}</h4>
      <p>{yazar} - <em>{kategori}</em></p>
      <button onClick={onFavoriDegistir}>
        {favorideMi ? "Favoriden Çıkar" : "Favori Ekle"}
      </button>
    </div>
  );
}

export default KitapKarti;