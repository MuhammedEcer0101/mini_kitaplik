import React, { useState, useEffect } from "react";
import { kitaplar } from "./data";
import AramaCubugu from "./components/AramaCubugu";
import KategoriFiltre from "./components/KategoriFiltre";
import KitapListesi from "./components/KitapListesi";
import FavoriPaneli from "./components/FavoriPaneli";
import "./App.css";

function App() {
  const [aramaMetni, setAramaMetni] = useState(localStorage.getItem("aramaMetni") || "");
  const [kategori, setKategori] = useState("Tümü");
  const [favoriler, setFavoriler] = useState(
    JSON.parse(localStorage.getItem("favoriler")) || []
  );

  useEffect(() => {
    localStorage.setItem("aramaMetni", aramaMetni);
  }, [aramaMetni]);

  useEffect(() => {
    localStorage.setItem("favoriler", JSON.stringify(favoriler));
  }, [favoriler]);

  const filtreliKitaplar = kitaplar.filter((kitap) => {
    const aramaUygun = kitap.baslik.toLowerCase().includes(aramaMetni.toLowerCase());
    const kategoriUygun = kategori === "Tümü" || kitap.kategori === kategori;
    return aramaUygun && kategoriUygun;
  });

  const favoriDegistir = (kitap) => {
    if (favoriler.find((f) => f.id === kitap.id)) {
      setFavoriler(favoriler.filter((f) => f.id !== kitap.id));
    } else {
      setFavoriler([...favoriler, kitap]);
    }
  };

  return (
    <div className="App">
      <h2>Mini Kitaplık</h2>
      <div className="filtreler">
        <AramaCubugu value={aramaMetni} onChange={setAramaMetni} />
        <KategoriFiltre value={kategori} onChange={setKategori} />
      </div>
      <div className="icerik">
        <KitapListesi
          kitaplar={filtreliKitaplar}
          favoriler={favoriler}
          onFavoriDegistir={favoriDegistir}
        />
        <FavoriPaneli favoriler={favoriler} />
      </div>
    </div>
  );
}

export default App;