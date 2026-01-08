import './Contacto.css';

const Contacto = () => {
    return (
        <section id="contacto" className="contacto section-padding">
            <div className="container contacto__container">
                <div className="contacto__content">
                    <h2>¿Necesitas reparar tu auto?</h2>
                    <p>Estamos disponibles para asesorarte y ofrecerte el mejor presupuesto. Envíanos fotos por WhatsApp para una valoración rápida.</p>

                    <a
                        href="https://wa.me/5491181077576?text=Hola!%20Quisiera%20hacer%20una%20consulta%20sobre%20un%20presupuesto%20de%20chapa%20y%20pintura."
                        className="btn-whatsapp"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="whatsapp-icon">📞</span> Contactar por WhatsApp
                    </a>

                    <div className="contacto__info">
                        <p><strong>Email:</strong> rulochapa@live.com</p>
                        <p><strong>Teléfono:</strong> +54 9 11 8107 7576</p>
                        <p><strong>Ubicación:</strong> Bs. As.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacto;
