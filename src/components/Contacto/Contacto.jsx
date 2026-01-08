import './Contacto.css';

const Contacto = () => {
    return (
        <section id="contacto" className="contacto section-padding">
            <div className="container contacto__container">
                <div className="contacto__content">
                    <h2>¿Necesitas reparar tu auto?</h2>
                    <p>Estamos disponibles para asesorarte y ofrecerte el mejor presupuesto. Envíanos fotos por WhatsApp para una valoración rápida.</p>

                    <a
                        href="https://wa.me/5491168096768"
                        className="btn-whatsapp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="whatsapp-icon">📞</span> Contactar por WhatsApp
                    </a>

                    <div className="contacto__info">
                        <p><strong>Email:</strong> contacto@tallergustavo.com</p>
                        <p><strong>Teléfono:</strong> +54 9 11 6809 6768</p>
                        <p><strong>Ubicación:</strong> Zona Norte, Bs. As.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
