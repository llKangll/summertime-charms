import React from "react";

const Gallery = ({ image, onClose }) => {
  if (!image) return null;

  return (
    <div className="gallery-overlay" onClick={onClose}>
      <div className="gallery-content">
        <img src={image} alt="Producto ampliado" className="gallery-image" />
      </div>
    </div>
  );
};

export default Gallery;
