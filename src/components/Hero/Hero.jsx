/* src/components/Hero/Hero.jsx */
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero__split hero__split--left">
                <div className="hero__content">
                    <span className="hero__label">CHAPA Y PINTURA</span>
                    <h2 className="hero__title">
                        PRECISIÓN <br />
                        <span className="outline-text">ABSOLUTA</span>
                    </h2>
                    <p className="hero__subtitle">
                        Restauración automotriz de alto nivel. Tecnología de punta y acabados de fábrica para tu vehículo.
                    </p>
                    <div className="hero__actions">
                        <a href="#contacto" className="btn-racing">COTIZAR AHORA</a>
                    </div>
                </div>
            </div>

            <div className="hero__split hero__split--right">
                <div className="hero__image-container">
                    {/* Diagonal styled image */}
                </div>
            </div>
        </section>
    );
};

export default Hero;
