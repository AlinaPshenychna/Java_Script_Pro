import "./ProductTable.css";
import Table from "../../components/Table/Table";
import LogoProduct from "../../assets/logo-productTable.svg";
import { IoPersonOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Button from "../../components/Button/Button";

const ProductTable = () => {
  return (
    <div className="Container">
      <img src={LogoProduct} alt="logo Rozetka" className="Logo-product"></img>
      <div className="Btn-flex">
        <Button
          buttonText="Preview"
          className="ProductTable-btn-review"
          icon={
            <IoPersonOutline style={{ position: "absolute", left: "35px" }} />
          }
        />
        <Button
          buttonText="Add product"
          className="ProductTable-btn-add_products"
          icon={<FaPlus style={{ position: "absolute", left: "5px" }} />}
        />
      </div>
      <h1 className="Title">Products</h1>
      <Table />
    </div>
  );
};

export default ProductTable;
