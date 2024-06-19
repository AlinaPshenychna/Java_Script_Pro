import "./ProductPreview.css";
import CardProduct from "../../components/CardProduct/CardProduct";
import LogoProduct from "../../assets/logo-productTable.svg";

const ProductPreview = () => {
  return (
    <div className="ProductPreview-container">
      <img src={LogoProduct} alt="logo-rozetka" className="LogoProduct"></img>
      <div className="CardProduct-flex">
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
        <CardProduct />
      </div>
    </div>
  );
};
export default ProductPreview;
