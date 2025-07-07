import { getProduits } from "./produits.js";
import { expect, test } from 'vitest'


test('should fetch product 1', async () => {
  // Récupération de tous les produits
  const produits = await getProduits();
  // Récupération du nom du premier produit
  const produit = produits[0].nom;

  // Assertion
  expect(produit).toEqual("fugiat");
});
