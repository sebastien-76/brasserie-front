import React from 'react'
import { Link } from 'react-router'

export const NavBar = () => {
    return (
        <ul class="navBar">
            <li><Link to='/' class="navLien">Accueil</Link></li>
            <li><Link to='/produit' class="navLien">Produit</Link></li>
            <li>Contact</li>
        </ul>
    )
}