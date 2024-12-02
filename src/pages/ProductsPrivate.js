import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/ProductsPrivate.css';

const ProductsPrivate = () => {
  const navigate = useNavigate();

  const productos = [
    { id: 1, titulo: 'Producto 1', precio: '$1234', img: 'https://via.placeholder.com/150' },
    { id: 2, titulo: 'Producto 2', precio: '$5678', img: 'https://via.placeholder.com/150' },
    { id: 3, titulo: 'Producto 3', precio: '$91011', img: 'https://via.placeholder.com/150' },
    { id: 4, titulo: 'Producto 4', precio: '$121314', img: 'https://via.placeholder.com/150' },
    { id: 5, titulo: 'Producto 5', precio: '$151617', img: 'https://via.placeholder.com/150' },
    { id: 6, titulo: 'Producto 6', precio: '$181920', img: 'https://via.placeholder.com/150' },
  ];

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
        <main className="flex-grow-1">
          <div className="grid-container">
            {productos.map((producto) => (
              <div className="product-card" key={producto.id}>
                <img src={producto.img} alt={producto.titulo} className="product-image" />
                <div className="product-details">
                  <div className="product-info">
                    <h5 className="product-title">{producto.titulo}</h5>
                    <p className="product-price">{producto.precio}</p>
                  </div>
                  <Link to={`/producto-privado/${producto.id}`} className="btn btn-outline-dark">
                    Ver más
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default ProductsPrivate;
