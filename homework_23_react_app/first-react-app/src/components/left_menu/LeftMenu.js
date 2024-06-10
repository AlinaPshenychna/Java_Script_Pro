import "./LeftMenu.css";

function LeftMenu() {
  return (
    <div className="LeftMenu">
      <p className="Catalog">Каталог</p>
      <ul className="LeftMenu-list">
        <li>
          <a href="">Семена цветов</a>
        </li>
        <li>
          <a href="">Растения в контецнерах</a>
        </li>
        <li>
          <a href="">Клубни и улковицы</a>
        </li>
        <li>
          <a href="">Удобрения</a>
        </li>
        <li>
          <a href="">Средства защиты растений</a>
        </li>
        <li>
          <a href="">Комнатные растения</a>
        </li>
        <li>
          <a href="">Подарочные сертификаты</a>
        </li>
      </ul>
    </div>
  );
}

export default LeftMenu;
