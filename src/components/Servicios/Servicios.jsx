/* src/components/Servicios/Servicios.jsx */
import { useState } from 'react';
import './Servicios.css';

const Servicios = ({ servicios }) => {
    const [activeService, setActiveService] = useState(servicios[0]);

    return (
        <section id="servicios" className="servicios section-padding">
            <div className="container">
                <div className="section-header">
                    <span className="section-subtitle">NUESTRAS ESPECIALIDADES</span>
                    <h2>SERVICIOS <span className="highlight">PREMIUM</span></h2>
                </div>

                <div className="services-tabs">
                    {/* Lista de pestañas (Izquierda) */}
                    <div className="services-list">
                        {servicios.map((servicio) => (
                            <button
                                key={servicio.id}
                                className={`service-tab-btn ${activeService.id === servicio.id ? 'active' : ''}`}
                                onClick={() => setActiveService(servicio)}
                            >
                                <span className="tab-title">{servicio.titulo}</span>
                            </button>
                        ))}
                    </div>

                    {/* Contenido (Derecha) */}
                    <div className="service-display">
                        <div className="service-image-wrapper">
                            {/* La key fuerza el remount para la animación al cambiar */}
                            {activeService.imagen ? (
                                <img
                                    key={activeService.id}
                                    src={activeService.imagen}
                                    alt={activeService.titulo}
                                    className="service-img"
                                />
                            ) : (
                                <div className="service-icon-placeholder">{activeService.icono}</div>
                            )}
                            <div className="service-overlay"></div>
                        </div>

                        <div className="service-info">
                            <h3>{activeService.titulo}</h3>
                            <p>{activeService.descripcion}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Servicios;
