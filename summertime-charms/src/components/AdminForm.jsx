import React, { useState } from "react";

const AdminForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!product.name || !product.price || !product.image) return;
    onAddProduct({ ...product, id: Date.now() });
    setProduct({ name: "", description: "", price: "", image: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="admin-form">
      <input type="text" name="name" placeholder="Nombre" value={product.name} onChange={handleChange} required />
      <textarea name="description" placeholder="Descripción" value={product.description} onChange={handleChange} />
      <input type="number" name="price" placeholder="Precio" value={product.price} onChange={handleChange} required />
      <input type="text" name="image" placeholder="URL de la imagen" value={product.image} onChange={handleChange} required />
      <button type="submit">Agregar Producto</button>
    </form>
  );
};

export default AdminForm;
