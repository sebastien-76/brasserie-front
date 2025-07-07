import React, { useEffect, useState } from "react";
import { Axios } from "../../services/ServiceAppel";
import { TitrePage } from "../../composants/titrePage/TitrePage";
import { Carte } from "../../composants/carte/Carte";
import { Recherche } from "../../composants/recherche/Recherche";
import { Filtre } from "../../composants/filtre/Filtre";
import { Menu } from "../../composants/menu/Menu";
import "./Produit.css";
import { Footer } from "../../composants/footer/Footer";

export const Produit = () => {
  /* Déclaration des états nécessaires */
  const [produits, setProduits] = useState([]);
  const [typeProduits, setTypeProduits] = useState([]);
  const [produitsRecherches, setProduitsRecherches] = useState([]);
  const [produitsFiltres, setProduitsFiltres] = useState([]);
  const [produitsAffiches, setProduitsAffiches] = useState([]);
  const [recherche, setRecherche] = useState(false);
  const [filtre, setFiltre] = useState(false);

  /* Fonction de récupération des produits */
  const fetchProduits = () => {
    try {
      return Axios.get("/produits").then((res) => {
        setProduits(res.data.member);
        setProduitsAffiches(res.data.member);
      });
    } catch (error) {
      console.error("Error fetching produits:", error);
    }
  };

  /* Fonction de récupération des types de produits */
  const fetchTypeProduits = () => {
    try {
      return Axios.get("/type_produits").then((res) => {
        setTypeProduits(res.data.member);
      });
    } catch (error) {
      console.error("Error fetching produits:", error);
    }
  };

  /* 	Récupérationdes produits et des types de produits */
  useEffect(() => {
    fetchProduits();
    fetchTypeProduits();
  }, []);

  /* Filtre des produits en fonction de la recherche et des filtres */
  useEffect(() => {
    if (recherche) {
      if (filtre) {
        if (produitsRecherches.length == 0) {
          setProduitsAffiches([]);
        } else {
          if (produitsFiltres.length == 0) {
            setProduitsAffiches([]);
          } else {
            setProduitsAffiches(
              produitsRecherches.filter((produit) =>
                produitsFiltres.includes(produit),
              ),
            );
          }
        }
      } else {
        if (produitsRecherches.length == 0) {
          setProduitsAffiches([]);
        } else {
          setProduitsAffiches(produitsRecherches);
        }
      }
    } else {
      if (filtre) {
        if (produitsFiltres.length == 0) {
          setProduitsAffiches([]);
        } else {
          setProduitsAffiches(produitsFiltres);
        }
      } else {
        setProduitsAffiches(produits);
      }
    }
  }, [produitsRecherches, produitsFiltres]);

  return (
    <div className="pageProduit">
      <Menu />

      <TitrePage titre="Les produits" classe="titreProduits" />

      <div className="container">
        {/* Section de recherche et filtres */}
        <div className="rechercheFiltre">
          <div className="recherche">
            <Recherche
              liste={produits}
              setListe={setProduitsRecherches}
              setRecherche={setRecherche}
            />
          </div>
          <div className="filtres">
            <h4 className="titreFiltre">Filtre</h4>
            <Filtre
              typeProduits={typeProduits}
              liste={produits}
              setListe={setProduitsFiltres}
              setFiltre={setFiltre}
            />
          </div>
        </div>
        {/* Grille de présentation des produits */}
        <div className="grid-container">
          {produitsAffiches.map((produit, index) => (
            <div
              key={index}
              className={`grid-item ${produit.actif ? "visible" : "invisible"}`}
            >
              <Carte
                nom={produit.nom}
                description={produit.description}
                typeProduit={produit.typeProduit.nom}
                actif={produit.actif}
                imageName={produit.imageName}
                classe="imageProduit"
              />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};
