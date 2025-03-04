import React, { useState } from "react";
import { getProducts, addProduct, removeProduct } from "../api/products";
import AdminForm from "../components/AdminForm";

const AdminPanel = () => {
  const [products, setProducts] = useState(getProducts());

  const handleAddProduct = (newProduct) => {
    addProduct(newProduct);
    setProducts(getProducts());
  };

  const handleRemoveProduct = (id) => {
    removeProduct(id);
    setProducts(getProducts());
  };

  return (
    <div className="admin-panel">
      <h2>Panel de Administración</h2>
      <AdminForm onAddProduct={handleAddProduct} />
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <span>{product.name} - ${product.price}</span>
            <button onClick={() => handleRemoveProduct(product.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
