import React, { useEffect, useState } from 'react'

export const Recherche = ({ liste, setListe, setRecherche }) => {
    /* Définition de l'état recherche */
    const [chaineRecherchee, setChaineRecherchee] = useState(''); 
    
    /* Filtre des produits de la liste en fonction de la recherche */
    const listeRecherche = () => {
        return (liste.filter((produit) => produit.nom.toLowerCase().includes(chaineRecherchee.toLowerCase())));
    }

    /* Modification de l'état recherche en fonction de l'entrée en input */
    const handleRecherche = (event) => {
        setChaineRecherchee(event.target.value);
    }

    /* Mise à jour de la liste en fonction de la recherche */
    useEffect(() => {
        chaineRecherchee ? (setListe(listeRecherche()), setRecherche(true)) : (setRecherche(false), setListe(liste));
    }, [chaineRecherchee]);

    return (
        <>
            <input type="text" className="barre-recherche" name='recherche' onChange={handleRecherche} value={chaineRecherchee}></input>
        </>
    )
}
