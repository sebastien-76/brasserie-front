import React, { useEffect, useState } from 'react'

export const Recherche = ({ liste, setListe }) => {
    /* Définition de l'état recherche */
    const [recherche, setRecherche] = useState(''); 
    
    /* Filtre des produits de la liste en fonction de la recherche */
    const listeRecherche = () => {
        return (liste.filter((produit) => produit.nom.toLowerCase().includes(recherche.toLowerCase())));
    }

    /* Modification de l'état recherche en fonction de l'entrée en input */
    const handleRecherche = (event) => {
        setRecherche(event.target.value);
    }

    /* Mise à jour de la liste en fonction de la recherche */
    useEffect(() => {
        recherche ? setListe(listeRecherche()) : setListe(liste);
    }, [recherche]);

    return (
        <>
            <input type="text" className="barre-recherche" name='recherche' onChange={handleRecherche} value={recherche}></input>
        </>
    )
}
