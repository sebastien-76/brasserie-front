import React from 'react'
import { Link } from 'react-router'

export const NavBar = () => {
    return (
        <ul className="navBar">
            <li><Link to='/' className="navLien">Accueil</Link></li>
            <li><Link to='/produit' className="navLien">Produits</Link></li>
            <li><Link to='#' className="navLien">Services</Link></li>
            <li><Link to='#' className="navLien">Contact</Link></li>
        </ul>
    )
}