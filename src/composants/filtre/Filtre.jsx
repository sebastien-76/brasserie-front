import React, { useState, useEffect } from 'react'

export const Filtre = ({ typeProduits, liste, setListe }) => {
	const [filtre, setFiltre] = useState([]);

	const listeFiltre = () => {
		return (liste.filter((produit)=> filtre.includes(produit.typeProduit.nom)));
	}

	const handleFiltre = (e) => {
		e.target.checked ? setFiltre([...filtre, e.target.name]) : setFiltre(filtre.filter((typeProduit) => typeProduit !== e.target.name));
		
	}

	useEffect(() => {
		(filtre.length > 0) ? setListe(listeFiltre()) : setListe(liste);
	}, [filtre]);


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
