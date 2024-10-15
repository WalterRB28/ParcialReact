import imagenGatoPromo from '../assets/Products/catNailCutter.png';
import imagenPerroPromo from '../assets/Products/dogNailCutter.png';
import imagenHumanoPromo from '../assets/Products/humanNailCutter.png';
import imagenBeneficio1 from '../assets/Benefits/beneficioUno.png'
import imagenBeneficio2 from '../assets/Benefits/beneficioDos.png'
import imagenBeneficio3 from '../assets/Benefits/beneficioTres.png'



const cardsData = [
    {
      imagen: imagenPerroPromo,
      descImagen: 'Productos para perros',
      productoDesc: 'Nuestros cortauñas para perros tienen la mejor calidad en sus pinzas, permitiéndoles un corte fácil y rápido.',
    },
    {
      imagen: imagenGatoPromo,
      descImagen: 'Productos para gatos',
      productoDesc: 'Nuestra sección de cortauñas para gatos posee una de las mejores selecciones, además, el diseño ergonómico del mango proporciona un agarre cómodo y seguro.',
    },
    {
      imagen: imagenHumanoPromo,
      descImagen: 'Productos para personas',
      productoDesc: 'Tenemos diferentes variedades de cortauñas para adultos, para que tus uñas no se lastimen y no te avergüences de ellas.',
    },
];

const menuLista = [
    {
        name: 'Inicio',
        sublista: []
    },
    {
        name: 'Cortauñas',
        sublista: [
            { name: 'Bebe', sublista: [] },
            { name: 'Adulto', sublista: [] },
            { name: 'Perro', sublista: [] },
            { name: 'Gato', sublista: [] },
      ],
    },
    {
        name: 'Informacion',
        sublista: []
    },
    {
        name: 'Contacto',
        sublista: [
            { name: 'WhatsApp', sublista: [] },
            { name: 'Facebook', sublista: [] },
            { name: 'Instagram', sublista: [] },
        ],
    },
];

const benefits = [
    {
        imagenBeneficio: imagenBeneficio1,
        altText: 'Evitar uñas encarnadas',
        titulo: 'Evita uñas encarnadas',
        descripcion: 'Al ocupar nuestros productos, puedes evitar hinchazón y quitar la aparición de todo tipo de infecciones.',
    },
    {
        imagenBeneficio: imagenBeneficio2,
        altText: 'Evita infecciones baterianas',
        titulo: 'Evita infecciones baterianas',
        descripcion: 'Las uñas largas pueden albergar gérmenes, lo que puede ser un riesgo al tocar alimentos o la cara. Mantenerlas cortas es una práctica de higiene básica.',
    },
    {
        imagenBeneficio: imagenBeneficio3,
        altText: 'Evita lesiones en tus mascotas',
        titulo: 'Evita lesiones en tus mascotas',
        descripcion: 'Uñas largas en mascotas pueden engancharse en superficies, lo que puede causar dolor y lesiones en las patas o desgarrar la uña.',
    },
]

export default { cardsData, menuLista, benefits };