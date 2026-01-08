/* src/components/SobreMi/SobreMi.jsx */
import './SobreMi.css';

const SobreMi = () => {
    return (
        <section id="sobre-mi" className="sobre-mi section-padding skew-bg">
            <div className="container skew-fix"> {/* Counter-skew content */}
                <div className="sobre-mi__grid">
                    <div className="sobre-mi__text">
                        <span className="section-subtitle">NUESTRA HISTORIA</span>
                        <h2>MÁS DE <span className="highlight">40 AÑOS</span> <br /> DE EXPERIENCIA</h2>
                        <br />
                        <p>
                            Contamos con una amplia trayectoria trabajando con todo tipo de vehículos,
                            desde clásicos hasta deportivos de alta gama. Nuestra prioridad es la
                            satisfacción total de nuestros clientes, respaldada por tecnología de
                            vanguardia y un equipo experto en restauración automotriz.
                        </p>

                        <div className="stats-row">
                            <div className="stat-item">
                                <span className="stat-number">2k+</span>
                                <span className="stat-label">Autos Reparados</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Clientes Satisfechos</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">24h</span>
                                <span className="stat-label">Presupuestos</span>
                            </div>
                        </div>
                    </div>

                    <div className="sobre-mi__visual">
                        <img src="/images/about.png" alt="Taller" className="about-img main-img" />
                        <div className="decoration-box"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SobreMi;
