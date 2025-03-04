// src/api/products.js

const products = [
  { id: 1, name: "Collar de Perlas", price: 12000, image: "collar.jpg", category: "Collares" },
  { id: 2, name: "Pulsera de Oro", price: 8500, image: "pulsera.jpg", category: "Pulseras" },
  { id: 3, name: "Aros de Plata", price: 6500, image: "aros.jpg", category: "Aros" },
  { id: 4, name: "Ramo de Rosas Eternas", price: 15500, image: "ramo.jpg", category: "Ramos" },
  { id: 5, name: "Maceta Decorativa", price: 9800, image: "maceta.jpg", category: "Macetas" }
];

export const getProducts = () => products;

export const addProduct = (product) => {
  const newProduct = { id: products.length + 1, ...product };
  products.push(newProduct);
  return newProduct;
};

export const removeProduct = (id) => {
  const index = products.findIndex(product => product.id === id);
  if (index !== -1) {
    return products.splice(index, 1)[0];
  }
  return null;
};
