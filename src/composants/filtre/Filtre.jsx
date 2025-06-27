import React, { useState, useEffect } from 'react'

export const Filtre = ({ typeProduits, liste, setListe, setFiltre }) => {
	const [filtres, setFiltres] = useState([]);

	const listeFiltre = () => {
		return (liste.filter((produit)=> filtres.includes(produit.typeProduit.nom)));
	}

	const handleFiltre = (e) => {
		e.target.checked ? (setFiltres([...filtres, e.target.name])) : setFiltres((filtres.filter((typeProduit) => typeProduit !== e.target.name)));
	}

	useEffect(() => {
		(filtres.length > 0) ? (setListe(listeFiltre()), setFiltre(true)) : (setListe(liste), setFiltre(false) );
	}, [filtres]);


	return (
		<div className="listeFiltres">
			{
				typeProduits.map((typeProduit) => {
					return (
						<div key={typeProduit.id} className="filtre">
							<input type="checkbox" name={typeProduit.nom} id={typeProduit.nom} onChange={handleFiltre} />
							<label htmlFor={typeProduit.nom}>{typeProduit.nom}</label>
						</div>
					)
				})
			}
		</div>
	)
}
