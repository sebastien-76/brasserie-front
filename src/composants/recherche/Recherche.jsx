import React, { useEffect, useState } from "react";
import { recherche } from "../../utils/recherche";

export const Recherche = ({ liste, setListe, setRecherche }) => {
  /* Définition de l'état recherche */
  const [chaineRecherchee, setChaineRecherchee] = useState("");
  const [listeRecherchee, setListeRecherchee] = useState([]);

  /* Filtre des produits de la liste en fonction de la recherche */
  useEffect(() => {
    setListeRecherchee(recherche(chaineRecherchee, liste));
  }, [chaineRecherchee]);

  /* Modification de l'état recherche en fonction de l'entrée en input */
  const handleRecherche = (event) => {
    setChaineRecherchee(event.target.value);
  };

  /* Mise à jour de la liste en fonction de la recherche */
  useEffect(() => {
    chaineRecherchee
      ? (setListe(listeRecherchee), setRecherche(true))
      : (setRecherche(false), setListe(liste));
  }, [listeRecherchee]);

  return (
    <>
      <input
        type="text"
        className="barre-recherche"
        name="recherche"
        onChange={handleRecherche}
        value={chaineRecherchee}
      ></input>
    </>
  );
};
