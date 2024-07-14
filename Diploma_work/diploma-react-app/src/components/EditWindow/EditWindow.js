import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Input from "@mui/material/TextField";
import { useState, useEffect } from "react";
import "./EditWindow.css";
import { formatQuantity } from "../../utils/formatQuantity";
import { IoCloseSharp } from "react-icons/io5";

const EditWindow = ({
  handleClose,
  product,
  submitProduct,
  open,
  addProduct,
}) => {
  const [error, setError] = useState(false);
  const [editedProduct, setEditedProduct] = useState({
    category: "",
    name: "",
    quantity: "",
    price: "",
    description: "",
  });

  useEffect(() => {
    if (product) {
      setEditedProduct(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSave = () => {
    if (
      !editedProduct.category ||
      !editedProduct.name ||
      !editedProduct.quantity ||
      !editedProduct.price
    ) {
      setError("Don't left empty fields");
      return;
    }
    submitProduct(editedProduct);
    handleClose();
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        className="Modal-box"
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <IoCloseSharp className="Close-btn" onClick={handleClose} />
        <h3>Edit: {product ? product.name : "New Product"}</h3>
        <Input
          id="outlined-basic"
          label="Category"
          variant="outlined"
          value={editedProduct.category}
          name="category"
          onChange={handleChange}
          required
        />
        <Input
          id="outlined-basic"
          label="Name"
          variant="outlined"
          value={editedProduct.name}
          name="name"
          onChange={handleChange}
          required
        />
        <Input
          id="outlined-basic"
          label="Quantity"
          variant="outlined"
          value={formatQuantity(editedProduct.quantity)}
          name="quantity"
          onChange={handleChange}
          required
        />
        <Input
          id="outlined-basic"
          label="Price"
          variant="outlined"
          value={editedProduct.price}
          name="price"
          onChange={handleChange}
          required
        />
        <Input
          id="outlined-basic"
          label="Description"
          variant="outlined"
          value={editedProduct.description}
          name="qdescription"
          onChange={handleChange}
        />
        {error && <p className="Error-text">{error}</p>}
        <div className="Edit-flex">
          <Button className="Modal-edit-btn-close" onClick={handleClose}>
            Cancel
          </Button>
          <Button className="Modal-edit-btn-submit" onClick={handleSave}>
            Submit
          </Button>
        </div>
      </Box>
    </Modal>
  );
};

export default EditWindow;
