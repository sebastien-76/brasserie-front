import { Axios } from "../services/ServiceAppel";

// Fonction de récupération des produits
export async function getProduits() {
  return await Axios.get("/produits").then((res) => res.data.member);
}
