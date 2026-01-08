/* src/components/Header/Header.jsx */
import { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menuAbierto, setMenuAbierto] = useState(false);

    const toggleMenu = () => setMenuAbierto(!menuAbierto);
    const closeMenu = () => setMenuAbierto(false);

    return (
        <header className="header">
            <div className="container header__container">
                <div className="header__logo">
                    <h1>TALLER GUSTAVO</h1>
                    <span className="header__tag">DESDE 1986</span>
                </div>

                <div className={`header__overlay ${menuAbierto ? 'is-active' : ''}`} onClick={closeMenu}></div>

                <nav className={`header__nav ${menuAbierto ? 'is-active' : ''}`}>
                    <ul className="header__list">
                        <li><a href="#hero" onClick={closeMenu}>Inicio</a></li>
                        <li><a href="#servicios" onClick={closeMenu}>Servicios</a></li>
                        <li><a href="#sobre-mi" onClick={closeMenu}>Taller</a></li>
                        <li><a href="#contacto" onClick={closeMenu}>Contacto</a></li>
                    </ul>
                </nav>

                <div className="header__actions">
                    <a href="#contacto" className="btn-racing-small">
                        PEDIR TURNO
                    </a>
                    <button
                        className={`hamburger ${menuAbierto ? 'open' : ''}`}
                        onClick={toggleMenu}
                        aria-label="Menu"
                    >
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
