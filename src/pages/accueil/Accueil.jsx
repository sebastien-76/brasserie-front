import { Link } from 'react-router'
import { TitrePage } from '../../composants/titrePage/TitrePage'
import './Accueil.css'


export const Accueil = () => {

    return (
        <div>
            <TitrePage titre="Accueil" classe="titreAccueil"/>

            
            <Link to='/produit'>Produit</Link>
        </div>
    )
}

