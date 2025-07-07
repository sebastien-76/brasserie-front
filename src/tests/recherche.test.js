import { recherche } from "../utils/recherche";
import { getProduits } from "./produits.js";
import { expect, test } from "vitest";

test("recherche di", async () => {
  // Récupération de tous les produits
  const liste = await getProduits();
  // Définition de la chaine recherchée
  const chaineRecherchee = "di";
  // Définition du résultat attendu
  const resultat = [
    {
      "@id": "/api/produits/3",
      "@type": "Produit",
      "id": 3,
      "nom": "repudiandae",
      "description": "Voluptate nostrum qui voluptates ut ut.",
      "actif": true,
      "imageName": "blonde.jpg",
      "typeProduit": {
        "@id": "/api/type_produits/2",
        "@type": "TypeProduit",
        "nom": "bière ambrée"
      },
    },
    {
			"@id": "/api/produits/10",
			"@type": "Produit",
			"id": 10,
			"nom": "modi",
			"description": "Qui porro ut error ut unde voluptatibus.",
			"actif": true,
			"imageName": "brune.jpg",
			"typeProduit": {
				"@id": "/api/type_produits/1",
				"@type": "TypeProduit",
				"nom": "bière blonde"
			}
		}
  ];

  // Récupération de la liste recherchée
  const listeRecherchee = recherche(chaineRecherchee, liste);

  // Assertion
  expect(listeRecherchee).toEqual(resultat);
});
