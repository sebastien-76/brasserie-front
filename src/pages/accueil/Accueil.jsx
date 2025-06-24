import { TitrePage } from '../../composants/titrePage/TitrePage'
import './Accueil.css'
import { Menu } from '../../composants/menu/Menu'


export const Accueil = () => {

    return (
        <div>
            <Menu />

            <TitrePage titre="Accueil" classe="titreAccueil"/>
        </div>
    )
}

