import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Products.css';

const Products = () => {
  const productos = [
    { id: 1, titulo: 'Producto 1', precio: '$1234', img: 'https://via.placeholder.com/150' },
    { id: 2, titulo: 'Producto 2', precio: '$5678', img: 'https://via.placeholder.com/150' },
    { id: 3, titulo: 'Producto 3', precio: '$91011', img: 'https://via.placeholder.com/150' },
    { id: 4, titulo: 'Producto 4', precio: '$121314', img: 'https://via.placeholder.com/150' },
    { id: 5, titulo: 'Producto 5', precio: '$151617', img: 'https://via.placeholder.com/150' },
    { id: 6, titulo: 'Producto 6', precio: '$181920', img: 'https://via.placeholder.com/150' },
  ];

  return (
    <div>
      <header className="d-flex align-items-center justify-content-between p-3 header">
    <div className="d-flex align-items-center">
        <Link to="/">
            <img src="https://i.imgur.com/zJhruFi.png" alt="Logo" className="logo" />
        </Link>
    </div>
    <div className="header-buttons-container">
        <Link to="/ingresa" className="home-button">Ingresa</Link>
        <Link to="/registro" className="home-button">Regístrate</Link>
    </div>
</header>

      <div className="d-flex">
        <aside>
          <Link to="/productos">
            <button>
              <i className="fas fa-tshirt"></i>
              Productos
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
                  <Link to={`/producto/${producto.id}`} className="btn btn-outline-dark">
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

export default Products;
