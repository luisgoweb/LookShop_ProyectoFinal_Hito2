import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/RegisterPage.css';

const RegisterPage = () => {
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
            <main className="d-flex justify-content-center align-items-center register-page-container">
                <div className="register-form-wrapper">
                    <form className="register-form">
                        <h1 className="form-title">Crear una cuenta</h1>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                placeholder="Ingrese su email"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="username">Nombre de Usuario</label>
                            <input
                                type="text"
                                id="username"
                                className="form-control"
                                placeholder="Ingrese su nombre de usuario"
                            />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                placeholder="Ingrese su contraseña"
                            />
                        </div>
                        <button type="submit" className="btn btn-dark w-100 mt-3">Registrarme</button>
                        <p className="text-center mt-3">
                            <div className='text_form_bottom'> ¿Ya tienes una cuenta? </div> <Link to="/ingresa" className="text-link">Ingresa aquí</Link>
                        </p>
                    </form>
                </div>
            </main>
        </div>
    );
};

export default RegisterPage;
