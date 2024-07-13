import "./ProductTable.css";
import Table from "../../components/Table/Table";
import LogoProduct from "../../assets/logo-productTable.svg";
import { IoPersonOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Button from "../../components/Button/Button";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import { Link } from "react-router-dom";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getProducts = async () => {
    try {
      const response = await fetch(`${API_URL}products/products`);
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setProducts(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="Container">
      <img src={LogoProduct} alt="logo Rozetka" className="Logo-product"></img>
      <div className="Btn-flex">
        <Link to="/ProductPreview">
          <Button
            buttonText="Preview"
            className="ProductTable-btn-review"
            icon={
              <IoPersonOutline style={{ position: "absolute", left: "35px" }} />
            }
          />
        </Link>
        <Button
          buttonText="Add product"
          className="ProductTable-btn-add_products"
          icon={<FaPlus style={{ position: "absolute", left: "5px" }} />}
        />
      </div>
      <h1 className="Title">Products</h1>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {!isLoading && !isError && <Table products={products} />}
    </div>
  );
};

export default ProductTable;
