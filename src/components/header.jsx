import logo from "../Assets/LogoEspaceDetente.png";


export default function Header(props) {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="Espace Détente Reims" />
      <nav className="header__nav">
        <ul className="header__nav--menu">
          <li>
            <a
              className="header__nav--link"
              style={{ textDecoration: props.accueil, borderBottom: props.border}}
              href="/accueil"
            >
              accueil
            </a>
          </li>
          <li>
            <a
              className="header__nav--link"
              style={{ textDecoration: props.contact }}
              href="/contact"
            >
              contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
