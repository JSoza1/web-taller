import { useEffect } from 'react';

// Hook personalizado para detectar cuando los elementos entran en pantalla
const useScrollReveal = () => {
    useEffect(() => {
        // Definimos el callback que se ejecutará cuando el observer detecte intersecciones
        const handleScroll = (entries) => {
            entries.forEach((entry) => {
                // Si el elemento es visible en el viewport...
                if (entry.isIntersecting) {
                    // ...le añadimos la clase que activa la animación CSS
                    entry.target.classList.add('is-visible');

                    // Opcional: dejamos de observar si solo queremos que anime una vez
                    // observer.unobserve(entry.target); 

                }
            });
        };

        // Creamos el IntersectionObserver
        // threshold: 0.1 significa que disparará cuando el 10% del elemento sea visible
        const observer = new IntersectionObserver(handleScroll, {
            threshold: 0.1
        });

        // Seleccionamos todos los elementos con la clase .fade-in-section
        const targets = document.querySelectorAll('.fade-in-section');

        // Observamos cada uno
        targets.forEach((target) => observer.observe(target));

        // Función de limpieza: dejar de observar cuando el componente se desmonte
        return () => {
            targets.forEach((target) => observer.unobserve(target));
        };
    }, []); // El array vacío asegura que esto corra solo una vez al montar App
};

export default useScrollReveal;
