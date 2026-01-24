/* src/components/SobreMi/SobreMi.jsx */
import './SobreMi.css';
import aboutImg from '../../assets/images/about.webp';

const SobreMi = () => {
    return (
        <section id="sobre-mi" className="sobre-mi section-padding skew-bg">
            <div className="container skew-fix"> {/* Counter-skew content */}
                <div className="sobre-mi__grid">
                    <div className="sobre-mi__text">
                        <span className="section-subtitle">NUESTRA HISTORIA</span>
                        <h2>MÁS DE <span className="highlight">40 AÑOS</span> <br /> DE EXPERIENCIA</h2>

                        {/* Visual para Móvil (insertado entre título y texto) */}
                        <div className="sobre-mi__visual sobre-mi__visual--mobile">
                            <img src={aboutImg} alt="Taller" className="about-img mobile-img" />
                            <div className="decoration-box"></div>
                        </div>

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
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Color Exacto</span>
                            </div>
                        </div>
                    </div>

                    <div className="sobre-mi__visual sobre-mi__visual--desktop">
                        <img src={aboutImg} alt="Taller" className="about-img main-img" />
                        <div className="decoration-box"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SobreMi;
