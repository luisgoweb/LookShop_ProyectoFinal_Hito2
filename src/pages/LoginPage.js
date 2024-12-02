import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LoginPage.css';


const LoginPage = () => {
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
            <main className="d-flex justify-content-center align-items-center login-page-container">
            <div className="login-form-wrapper">
            <form className="login-form">
    <h1 className="form-title">Iniciar Sesión</h1>
    <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
            type="email"
            id="email"
            className="form-control"
            placeholder="Ingresa tu email"
        />
    </div>
    <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Ingresa tu contraseña"
        />
    </div>
    <button type="submit" className="btn btn-dark w-100 mt-3">
        Iniciar Sesión
    </button>
</form>

</div>

            </main>
        </div>
    );
};

export default LoginPage;
