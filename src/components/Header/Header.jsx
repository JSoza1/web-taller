import { useState } from 'react';
import './Header.css';

const Header = () => {
    // Estado para controlar si el menú móvil está abierto o cerrado
    const [menuAbierto, setMenuAbierto] = useState(false);

    // Función para alternar el estado del menú
    const toggleMenu = () => {
        setMenuAbierto(!menuAbierto);
    };

    // Función para cerrar el menú al hacer click en un enlace (UX mobile)
    const closeMenu = () => {
        setMenuAbierto(false);
    };

    let claseHamburguesa = 'hamburger';
    if (menuAbierto) {
        // IMPORTANTE: Dejamos un espacio al inicio (' open') para no pegar las palabras.
        // Resultado correcto: "hamburger open"
        // Resultado sin espacio: "hamburgeropen" (esto no funcionaría)
        claseHamburguesa += ' open';
    }

    let claseMenu = 'header__nav';
    if (menuAbierto) {
        claseMenu += ' is-active';
    }

    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__logo">
                    {/* Logo de texto fuerte y claro */}
                    <h1>Electricista Daniel</h1>
                </div>

                {/* Botón Hamburguesa: Visible solo en móvil */}
                <button
                    className="header__toggle"
                    onClick={toggleMenu}
                    aria-label="Abrir menú"
                >
                    {/* Icono de hamburguesa simple */}
                    <span className={claseHamburguesa}></span>
                </button>

                {/* Navegación: Clases condicionales para mostrar/ocultar en móvil */}
                <nav className={claseMenu}>
                    <ul className="header__list">
                        <li className="header__item">
                            <a href="#hero" className="header__link" onClick={closeMenu}>Inicio</a>
                        </li>
                        <li className="header__item">
                            <a href="#servicios" className="header__link" onClick={closeMenu}>Servicios</a>
                        </li>
                        <li className="header__item">
                            <a href="#sobre-mi" className="header__link" onClick={closeMenu}>Sobre Mí</a>
                        </li>
                        <li className="header__item">
                            <a href="#clientes" className="header__link" onClick={closeMenu}>Clientes</a>
                        </li>
                        <li className="header__item">
                            <a href="#contacto" className="header__link header__link--cta" onClick={closeMenu}>Contacto</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
