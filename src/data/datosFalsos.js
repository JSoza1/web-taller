// src/data/datosFalsos.js
import chapaImg from '../assets/images/chapa_soldadura.png';
import pinturaImg from '../assets/images/pintura.png';
import pulidoImg from '../assets/images/pulido.png';
import plasticosImg from '../assets/images/plasticos_v2.png';

export const serviciosData = [
    {
        id: 1,
        titulo: 'Chapa y Carrocería',
        descripcion: 'Reparación de abolladuras, golpes y daños estructurales. Recuperamos la línea original de su vehículo.',
        imagen: chapaImg
    },
    {
        id: 2,
        titulo: 'Pintura Profesional',
        descripcion: 'Cabina de pintura presurizada, colorimetría computarizada y acabados originales de fábrica.',
        imagen: pinturaImg
    },
    {
        id: 3,
        titulo: 'Pulido y Tratamientos',
        descripcion: 'Restauración de brillo, tratamientos cerámicos y protección de la pintura contra agentes externos.',
        imagen: pulidoImg
    },
    {
        id: 4,
        titulo: 'Reparación de Plásticos',
        descripcion: 'Soldadura y reconstrucción de paragolpes, espejos y molduras plásticas.',
        imagen: plasticosImg
    },
];

export const clientesData = [
    {
        id: 1,
        nombre: 'Roberto Mendez',
        comentario: 'Llevé mi auto por un choque y Gustavo me asesoró 10 puntos. El color quedó idéntico al original, imposible notar la diferencia. Muy agradecido.',
        estrellas: 5
    },
    {
        id: 2,
        nombre: 'Valeria Soria',
        comentario: 'Tuve un choque fuerte en la puerta y el guardabarros. El auto quedó como si recién saliera de fábrica. Super recomendados.',
        estrellas: 5
    },
    {
        id: 3,
        nombre: 'Jorge Almirón',
        comentario: 'Cumplieron con el plazo prometido y el presupuesto fue exacto. Muy profesionales y el taller es impecable.',
        estrellas: 5
    }
];
