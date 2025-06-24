import { TitrePage } from '../../composants/titrePage/TitrePage'
import './Accueil.css'
import { Menu } from '../../composants/menu/Menu'
import { Footer } from '../../composants/footer/Footer'


export const Accueil = () => {

    return (
        <div>
            <Menu />
            <TitrePage titre="Accueil" classe="titreAccueil"/>
            <Footer />
        </div>
    )
}

