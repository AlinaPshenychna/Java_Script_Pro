import "./ProductTable.css";
import Table from "../../components/Table/Table";
import LogoProduct from "../../assets/logo-productTable.svg";
import { IoPersonOutline } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import Button from "../../components/Button/Button";
import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import { Link } from "react-router-dom";
import EditWindow from "../../components/EditWindow/EditWindow";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditWindowOpen, setIsEditWindowOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const getProducts = async () => {
    try {
      const response = await fetch(`${API_URL}products/products`, {
        method: "GET",
      });
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

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${API_URL}products/products/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("Failed to delete the product");
      }
      await getProducts();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const submitProduct = async (product) => {
    try {
      const response = await fetch(
        `${API_URL}products/products/${product.id}`,
        {
          method: "PUT",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update the product");
      }
      await getProducts();
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleOpenEditWindow = (product) => {
    setSelectedProduct(product);
    setIsEditWindowOpen(true);
  };

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setIsEditWindowOpen(true);
  };

  const handleCloseEditWindow = () => {
    setIsEditWindowOpen(false);
  };

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
          onClick={handleAddProduct}
          icon={<FaPlus style={{ position: "absolute", left: "5px" }} />}
        />
      </div>
      <h1 className="Title">Products</h1>
      {isLoading && <div>Loading...</div>}
      {isError && <div>Error</div>}
      {!isLoading && !isError && (
        <Table
          products={products}
          onEdit={handleOpenEditWindow}
          deleteProduct={deleteProduct}
        />
      )}
      {isEditWindowOpen && (
        <EditWindow
          open={isEditWindowOpen}
          handleClose={handleCloseEditWindow}
          product={selectedProduct}
          submitProduct={submitProduct}
        />
      )}
    </div>
  );
};

export default ProductTable;
