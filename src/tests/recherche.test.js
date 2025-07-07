import { recherche } from "../utils/recherche";
import { getProduits } from "./produits.js";
import { expect, test } from "vitest";

test("recherche fugiat", async () => {
  // Récupération de tous les produits
  const liste = await getProduits();
  // Définition de la chaine recherchée
  const chaineRecherchee = "fugiat";
  // D2finition du résultat attendu
  const resultat = [
    {
      "@id": "/api/produits/1",
      "@type": "Produit",
      id: 1,
      nom: "fugiat",
      description: "Eius illo quia ducimus vitae.",
      actif: true,
      typeProduit: {
        "@id": "/api/type_produits/2",
        "@type": "TypeProduit",
        nom: "bière ambrée",
      },
      imageName: "brune.jpg",
    },
  ];

  // Récupération de la liste recherchée
  const listeRecherchee = recherche(chaineRecherchee, liste);

  // Assertion
  expect(listeRecherchee).toEqual(resultat);
});
