import { TitrePage } from "../../composants/titrePage/TitrePage";
import "./Accueil.css";
import { Menu } from "../../composants/menu/Menu";
import { Footer } from "../../composants/footer/Footer";
import imageDescription from "../../assets/images/brasserie.jpg";
import { Link } from "react-router";

export const Accueil = () => {
  return (
    <div>
      <Menu />
      <div className="accueil">
        <TitrePage titre="Brasserie" classe="titreAccueil" />
        <div className="description">
          <div className="image-description">
            <img src={imageDescription} alt="logo brasserie l'Artésienne" />
          </div>
          <div className="texte-description">
            <p>Bienvenue !</p>
            <p>Créée en 2025, la Brasserie est une histoire de passion.</p>
            <p>
              Venez découvrir{" "}
              <Link to="/produit" className="lien-description">
                nos produits
              </Link>{" "}
              et nos services.
            </p>
            <p>Bonne dégustation!</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
