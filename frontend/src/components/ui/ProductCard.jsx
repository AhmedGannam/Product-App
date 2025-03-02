import React, { useState } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import { useProductStore } from "../../store/product";

const ProductCard = ({ product }) => {
  const [updatedProduct, setUpdatedProduct] = useState(product);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteProduct, updateProduct } = useProductStore();

  const handleDeleteProduct = async (pid) => {
    const { success, message } = await deleteProduct(pid);
    if (!success) {
      toast.error(message || "Error occurred", { position: 'bottom-center', autoClose: 3000 });
    } else {
      toast.success(message || "Success", { position: 'bottom-center', autoClose: 3000 });
    }
  };

  const handleUpdateProduct = async (pid, updatedProduct) => {
    const { success, message } = await updateProduct(pid, updatedProduct);
    setIsModalOpen(false);
    if (!success) {
      toast.error(message || "Error occurred", { position: 'bottom-center', autoClose: 3000 });
    } else {
      toast.success("Product updated successfully", { position: 'bottom-center', autoClose: 3000 });
    }
  };

  return (
    <>
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <div className="product-card-body">
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <div className="card-buttons">
            <button onClick={() => setIsModalOpen(true)} style={{ color: "#3182ce" }}>
              <FaEdit />
            </button>
            <button onClick={() => handleDeleteProduct(product._id)} style={{ color: "#E53E3E" }}>
              <FaTrash />
            </button>
          </div>
        </div>
      </div>

     {isModalOpen && (
  <div className="modal-overlay">
    <div className="modal-content">
      <div className="modal-header">
        <h2>Update Product</h2>
        <button className="modal-close-btn" onClick={() => setIsModalOpen(false)}>
          &times;
        </button>
      </div>
      <div className="modal-body">
        <div className="form-group">
          <label>Product Name</label>
          <input
            type="text"
            className="modal-input"
            value={updatedProduct.name}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="number"
            className="modal-input"
            value={updatedProduct.price}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label>Image URL</label>
          <input
            type="text"
            className="modal-input"
            value={updatedProduct.image}
            onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
          />
        </div>
      </div>
      <div className="modal-footer">
        <button className="btn-secondary" onClick={() => setIsModalOpen(false)}>
          Cancel
        </button>
        <button className="btn-primary" onClick={() => handleUpdateProduct(product._id, updatedProduct)}>
          Update
        </button>
      </div>
    </div>
  </div>
)}
    </>
  );
};

export default ProductCard;



