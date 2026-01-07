import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero">
            <div className="hero__overlay"></div> {/* Capa oscura para mejorar lectura */}

            <div className="container hero__content">
                <h2 className="hero__title">
                    Soluciones Eléctricas <br />
                    <span className="hero__highlight">Profesionales y Seguras</span>
                </h2>

                <p className="hero__subtitle">
                    Instalaciones, automatización de tanques de agua, reparaciones y mantenimiento para su hogar o negocio.
                </p>

                <div className="hero__actions">
                    <a href="#contacto" className="btn btn--primary">Solicitar Presupuesto</a>
                    <a href="#servicios" className="btn btn--outline">Ver Servicios</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
