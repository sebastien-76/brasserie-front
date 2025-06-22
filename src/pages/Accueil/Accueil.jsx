import { Link } from 'react-router'


export const Accueil = () => {

    return (
        <div>
            <h1>Bienvenue à la brasserie L'Artésienne</h1>
            
            <Link to='/produit'>Produit</Link>
        </div>
    )
}

