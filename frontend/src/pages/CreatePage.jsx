
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useProductStore } from "../store/product";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  const { createProduct } = useProductStore();

  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast.error(message || "Error occurred", { position: 'bottom-center', autoClose: 3000 });
    } else {
      toast.success(message || "Product created successfully", { position: 'bottom-center', autoClose: 3000 });
    }
    setNewProduct({ name: "", price: "", image: "" });
  };

  return (
    <div className="create-container">
      <h1>Create New Product</h1>
      <div className="create-form">
        <input
          type="text"
          placeholder="Product Name"
          name="name"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={newProduct.price}
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={newProduct.image}
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
        />
        <button onClick={handleAddProduct}>Add Product</button>
      </div>
    </div>
  );
};

export default CreatePage;
