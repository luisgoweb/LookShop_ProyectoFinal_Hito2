import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/UploadPublication.css';

const UploadPublication = () => {
  const navigate = useNavigate();

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
            <button className="aside-button active">
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
        <main className="flex-grow-1 d-flex justify-content-center align-items-center">
          <div className="upload-publication-container">
            <form className="upload-publication-form">
              <div className="upload-images">
                <div className="upload-main-image">Subir Foto</div>
                <div className="upload-thumbnail-container">
                  <div className="upload-thumbnail">Subir Foto</div>
                  <div className="upload-thumbnail">Subir Foto</div>
                </div>
                <p className="upload-instructions">Carga hasta 3 fotos de tu prenda</p>
              </div>
              <div className="form-fields">
                <div className="form-field">
                  <label>Nombre de la Prenda</label>
                  <input type="text" placeholder="Escribe el tipo de prenda" />
                </div>
                <div className="form-field">
                  <label>Marca</label>
                  <input type="text" placeholder="Escribe la marca o tienda de la prenda" />
                </div>
                <div className="form-field">
                  <label>Talla</label>
                  <input type="text" placeholder="Escribe la talla (S - M - L - XL - XXL)" />
                </div>
                <div className="form-field">
                  <label>Teléfono</label>
                  <input type="text" placeholder="¿Cómo te contactarán?" />
                </div>
                <button type="submit" className="submit-button">Subir Publicación</button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UploadPublication;
