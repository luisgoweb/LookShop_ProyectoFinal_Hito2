import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/ProductDetailPrivate.css';

const ProductDetailPrivate = () => {
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [isMessagePopupOpen, setIsMessagePopupOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const images = [
    "https://via.placeholder.com/400x250",
    "https://via.placeholder.com/400x250",
    "https://via.placeholder.com/400x250",
  ];

  const handleOpenCarousel = (index) => {
    setCurrentSlide(index);
    setIsCarouselOpen(true);
  };

  const handleCloseCarousel = () => {
    setIsCarouselOpen(false);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleOpenMessagePopup = () => {
    setIsMessagePopupOpen(true);
  };

  const handleCloseMessagePopup = () => {
    setIsMessagePopupOpen(false);
    setMessage("");
  };

  const handleSendMessage = () => {
    alert(`Mensaje enviado: ${message}`);
    setIsMessagePopupOpen(false);
    setMessage("");
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div>
      <header className="d-flex align-items-center justify-content-between p-3 header">
        <div className="d-flex align-items-center">
          <Link to="/">
            <img src="https://i.imgur.com/zJhruFi.png" alt="Logo" className="logo" />
          </Link>
        </div>
        <div className="header-user-info">
          <span>Hola, Usuario!</span>
          <button className="logout-button" onClick={handleLogout}>
            Cerrar Sesión
          </button>
        </div>
      </header>
      <div className="d-flex">
        <aside>
          <Link to="/productos-privado">
            <button className="aside-button">
              <i className="fas fa-tshirt"></i>
              Productos
            </button>
          </Link>
          <div className="aside-divider"></div>
          <Link to="/favoritos">
            <button className="aside-button">
              <i className="fas fa-heart"></i>
              Favoritos
            </button>
          </Link>
          <Link to="/mensajes">
            <button className="aside-button">
              <i className="fas fa-comments"></i>
              Mensajes
            </button>
          </Link>
          <div className="aside-divider"></div>
          <Link to="/subir-publicacion">
            <button className="aside-button">
              <i className="fas fa-upload"></i>
              Publicar
            </button>
          </Link>
          <Link to="/mi-usuario">
            <button className="aside-button">
              <i className="fas fa-user"></i>
              Mi Usuario
            </button>
          </Link>
        </aside>
        <div
          className="flex-grow-1 d-flex justify-content-center align-items-center product-detail-container"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          <div className="product-detail-card">
            <div className="product-detail-images">
              <img
                src={images[0]}
                alt="Producto Principal"
                className="product-detail-main-image"
                onClick={() => handleOpenCarousel(0)}
              />
              <div className="product-detail-thumbnail-container">
                <img
                  src={images[1]}
                  alt="Miniatura 2"
                  className="product-detail-thumbnail"
                  onClick={() => handleOpenCarousel(1)}
                />
                <img
                  src={images[2]}
                  alt="Miniatura 3"
                  className="product-detail-thumbnail"
                  onClick={() => handleOpenCarousel(2)}
                />
              </div>
            </div>
            <div className="product-detail-info">
              <h1 className="product-detail-title">Producto 1</h1>
              <div className="product-detail-field">
                <span>Marca:</span> Marca X
              </div>
              <div className="product-detail-field">
                <span>Talla:</span> M
              </div>
              <div className="product-detail-field">
                <span>Teléfono:</span> +56912345678
              </div>
              <div className="product-detail-buttons">
                <button className="action-button agregar-favoritos">
                  <i className="fas fa-heart"></i> Agregar a Favoritos
                </button>
                <div className="d-flex align-items-center justify-content-between w-100 mt-3">
                  <span className="product-detail-price">Precio: $1234</span>
                  <button
                    className="action-button contactar-vendedor"
                    onClick={handleOpenMessagePopup}
                  >
                    <i className="fas fa-phone-alt"></i> Contacta al Vendedor
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isCarouselOpen && (
        <div className="carousel-overlay">
          <div className="carousel-container">
            <button className="carousel-close" onClick={handleCloseCarousel}>
              &times;
            </button>
            <button className="carousel-prev" onClick={handlePrevSlide}>
              <i className="bi bi-chevron-left"></i>
            </button>
            <img
              src={images[currentSlide]}
              alt={`Slide ${currentSlide + 1}`}
              className="carousel-image"
            />
            <button className="carousel-next" onClick={handleNextSlide}>
              <i className="bi bi-chevron-right"></i>
            </button>
            <div className="carousel-dots">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${currentSlide === index ? "active" : ""}`}
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      )}
      {isMessagePopupOpen && (
        <div className="message-popup-overlay">
          <div className="message-popup">
            <h2>Enviar mensaje al vendedor</h2>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escribe tu mensaje aquí..."
              className="message-textarea"
            ></textarea>
            <div className="popup-buttons">
              <button onClick={handleSendMessage} className="send-button">
                Enviar
              </button>
              <button onClick={handleCloseMessagePopup} className="cancel-button">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailPrivate;
