import React from "react";
import KitapKarti from "./KitapKarti";

function KitapListesi({ kitaplar, favoriler, onFavoriDegistir }) {
  return (
    <div className="kitap-listesi">
      {kitaplar.map((kitap) => (
        <KitapKarti
          key={kitap.id}
          kitap={kitap}
          favorideMi={favoriler.some((f) => f.id === kitap.id)}
          onFavoriDegistir={() => onFavoriDegistir(kitap)}
        />
      ))}
    </div>
  );
}

export default KitapListesi;