import './Contacto.css';

const Contacto = () => {
    return (
        <section id="contacto" className="contacto section-padding">
            <div className="container contacto__container">
                <div className="contacto__content">
                    <h2>¿Necesitas un electricista urgente?</h2>
                    <p>Estoy disponible para resolver tus problemas eléctricos. Contáctame por WhatsApp para una respuesta rápida.</p>

                    <a
                        href="https://wa.me/123456789"
                        className="btn-whatsapp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="whatsapp-icon">📞</span> Contactar por WhatsApp
                    </a>

                    <div className="contacto__info">
                        <p><strong>Email:</strong> contacto@electricistadaniel.com</p>
                        <p><strong>Teléfono:</strong> +54 9 11 1234 5678</p>
                        <p><strong>Zona:</strong> Capital Federal y GBA</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
