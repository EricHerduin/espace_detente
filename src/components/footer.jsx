import logo from "../Assets/LogoEspaceDetenteWhite.png";
import "https://kit.fontawesome.com/ef204fd57f.js";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <img className="footer__logo" src={logo} alt="Espace Détente Reims" />
      </div>
      <div className="footer__adress">
        <p>10 rue de l'industrie</p>
        <p>51350 Cormontreuil</p>
        <div className="footer__adress--contact">
          <i className="fa-sharp fa-solid fa-circle-phone"></i>
          <p>06.22.17.46.96</p>
        </div>
        <div className="footer__adress--contact">
          <i className="fa-regular fa-enveloppe"></i>
          <p>contact@espacedetentereims.fr</p>
        </div>
      </div>
      <div className="footer__network">
        <p>Retrouvez nous sur nos réseaux sociaux</p>
        <a href="https://www.facebook.com/EspaceDetenteReims" target="_blank">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.instagram.com/espace_detente_reims/"
          target="_blank"
        >
          <i className="fa-brands fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}
