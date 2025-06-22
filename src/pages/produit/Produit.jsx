import React, { useEffect, useState } from 'react'
import { Axios } from '../../services/ServiceAppel'
import { Link } from 'react-router'

export const Produit = () => {
    const [produits, setProduits] = useState([]);

    const fetchProduits = () => {
      try {
        return Axios.get('/produits').then((res) => {
        setProduits(res.data.member);
        });
      } catch (error) {
        console.error('Error fetching produits:', error);
      }
    };

    useEffect(() => {
      fetchProduits();
    },[])

  return (
    <div>
        <Link to='/'>Accueil</Link>
        <h1>Produit</h1>
        {produits.map((produit) => (
          <div key={produit.id}>
            <h2>{produit.nom}</h2>
            <p>{produit.description}</p>
            <p>{produit.actif ? 'Actif' : 'Inactif'}</p>
          </div>
        ))
        }



    </div>

  )
}
