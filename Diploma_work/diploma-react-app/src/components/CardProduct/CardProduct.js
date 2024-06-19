import "./CardProduct.css";
import ProductPicture from "../../assets/lenovo-laptop.png";
import { TiShoppingCart } from "react-icons/ti";

const CardProduct = () => (
  <div className="CardProduct-main">
    <div className="Card-flex">
      <img src={ProductPicture} alt="ProductPicture"></img>
      <h1 className="CardTitle">Ноутбук Lenovo</h1>
      <div className="flex">
        <p className="Price">25000₴</p>
        <p className="Quantity">Кількість: 5 </p>
      </div>
      <p className="Delivery-status">
        <TiShoppingCart className="Delivery-status-icon" /> Готовий до відправки
      </p>
    </div>
  </div>
);

export default CardProduct;
