import './Servicios.css';

// Este componente recibe "servicios" como prop desde App.jsx
// Estructura de props: { servicios: Array }
const Servicios = ({ servicios }) => {
    return (
        <section id="servicios" className="servicios section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Mis Servicios</h2>
                    <p>Soluciones profesionales adaptadas a tus necesidades</p>
                </div>

                <div className="servicios__grid">
                    {/* Iteramos sobre el array de servicios usando map */}
                    {servicios.map((servicio) => (
                        <div key={servicio.id} className="servicio-card fade-in-section">
                            <div className="servicio-card__icon">{servicio.icono}</div>
                            <h3 className="servicio-card__title">{servicio.titulo}</h3>
                            <p className="servicio-card__desc">{servicio.descripcion}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Servicios;
