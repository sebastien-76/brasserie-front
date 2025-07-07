// Fonction de recherche de produits dans une liste en fonction de la chaine de recherche
export const recherche = (chaineRecherchee, liste) => {
  return liste.filter((produit) =>
    produit.nom.toLowerCase().includes(chaineRecherchee.toLowerCase()),
  );
};
