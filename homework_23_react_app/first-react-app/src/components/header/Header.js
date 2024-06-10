import logo from "./logo.png";
import "./Header.css";

function Header() {
  return (
    <div className="Header">
      <a href="#" className="Logo">
        <img src={logo} alt="logotip" className="Logo-pic" />
      </a>
      <nav className="Main-menu">
        <ul className="Menu-list">
          <li>
            <a href="#">Наши продукты</a>
          </li>
          <li>
            <a href="#">Про компанию</a>
          </li>
          <li>
            <a href="#">Оплата и доставка</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      </nav>
      <a href="tel:+380671234567" className="Phone">
        +380671234567
      </a>
      <a href="#" className="Button">
        Связаться с нами
      </a>
    </div>
  );
}

export default Header;
