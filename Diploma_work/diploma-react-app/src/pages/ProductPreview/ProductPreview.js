import "./ProductPreview.css";
import CardProduct from "../../components/CardProduct/CardProduct";
import LogoProduct from "../../assets/logo-productTable.svg";

const products = [
  { id: 0, category: "PC", name: "lenovo", quantity: 5, price: 1000 },
  { id: 0, category: "PC", name: "lenovo", quantity: 5, price: 1000 },
  { id: 0, category: "PC", name: "lenovo", quantity: 5, price: 1000 },
  { id: 0, category: "PC", name: "lenovo", quantity: 5, price: 1000 },
];

const ProductPreview = () => {
  return (
    <div className="ProductPreview-container">
      <img src={LogoProduct} alt="logo-rozetka" className="LogoProduct"></img>
      <div className="CardProduct-flex">
        {products.map((product) => (
          <CardProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};
export default ProductPreview;
