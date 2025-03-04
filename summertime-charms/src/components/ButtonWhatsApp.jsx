import React from "react";

const ButtonWhatsApp = ({ product }) => {
  const phoneNumber = "+5492645802954"; // Reemplaza con el número real en formato internacional
  const message = `¡Hola! Estoy interesado en el producto: ${product.name}. ¿Está disponible?`;

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank");
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      Comprar por WhatsApp
    </button>
  );
};

export default ButtonWhatsApp;
