import './SobreMi.css';

const SobreMi = () => {
    return (
        <section id="sobre-mi" className="sobre-mi section-padding">
            <div className="container sobre-mi__container">
                <div className="sobre-mi__image fade-in-section">
                    {/* Imagen profesional, preferiblemente trabajando o una foto de perfil confiable */}
                    <img
                        src="https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?q=80&w=2070&auto=format&fit=crop"
                        alt="Electricista Daniel trabajando"
                        className="img-responsive rounded shadow"
                    />
                </div>

                <div className="sobre-mi__content fade-in-section">
                    <h2>Sobre Mí</h2>
                    <h3>Tu electricista de confianza en la zona</h3>
                    <p>
                        Hola, soy Daniel. Llevo más de 10 años dedicado a la electricidad, ofreciendo soluciones seguras y eficientes para hogares y pequeños negocios.
                    </p>
                    <p>
                        Me especializo en identificar problemas rápidamente y dejar todo funcionando como el primer día. Mi compromiso es la transparencia: presupuesto cerrado antes de empezar y sin sorpresas.
                    </p>

                    <ul className="sobre-mi__list">
                        <li>✅ Electricista Certificado</li>
                        <li>✅ Atención de Urgencias</li>
                        <li>✅ Garantía en todos los trabajos</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default SobreMi;
