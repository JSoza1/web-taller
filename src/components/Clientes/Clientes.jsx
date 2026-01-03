import './Clientes.css';

// Recibe un array de clientes como prop
const Clientes = ({ clientes }) => {
    // Función auxiliar para renderizar estrellas
    const renderEstrellas = (cantidad) => {
        return '⭐'.repeat(cantidad);
    };

    return (
        <section id="clientes" className="clientes section-padding">
            <div className="container">
                <div className="section-header text-center">
                    <h2>Opiniones de Clientes</h2>
                    <p>Lo que dicen quienes han confiado en mi trabajo</p>
                </div>

                <div className="clientes__grid">
                    {clientes.map((cliente) => (
                        <div key={cliente.id} className="cliente-card fade-in-section">
                            <div className="cliente-card__header">
                                <div className="cliente-card__avatar">
                                    {/* Inicial del nombre como avatar simple */}
                                    {cliente.nombre.charAt(0)}
                                </div>
                                <div className="cliente-card__info">
                                    <h3 className="cliente-card__name">{cliente.nombre}</h3>
                                    <div className="cliente-card__stars">
                                        {renderEstrellas(cliente.estrellas)}
                                    </div>
                                </div>
                            </div>
                            <p className="cliente-card__comment">"{cliente.comentario}"</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clientes;
