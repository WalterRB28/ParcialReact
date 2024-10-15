import imagenGatoPromo from '../assets/Products/catNailCutter.png';
import imagenPerroPromo from '../assets/Products/dogNailCutter.png';
import imagenHumanoPromo from '../assets/Products/humanNailCutter.png';

import imagenBeneficio1 from '../assets/Benefits/beneficioUno.png'
import imagenBeneficio2 from '../assets/Benefits/beneficioDos.png'
import imagenBeneficio3 from '../assets/Benefits/beneficioTres.png'

import luxuryNail from '../assets/Products/luxuryNail.png'
import qualityNail from '../assets/Products/qualityNail.png'
import brownStroke  from '../assets/Decorations/brownStroke.png'

import pfpOne from '../assets/Pfp/pfpOne.png'
import pfpTwo from '../assets/Pfp/pfpTwo.png'
import pfpThree from '../assets/Pfp/pfpThree.png'
import pfpFour from '../assets/Pfp/pfpFour.png'

// Informacion para las tarjetas de resumen
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

// SubMenu para el navBar
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

// Lista de beneficios para el carrousel
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

// Objetos para el "proceso" de informacion de cada uno
const processInformation = [
    {
        imageProduct: luxuryNail,
        imageDecoration: brownStroke,
        altTextProduct: 'Cortauñas premium',
        infoProduct: 'Set personal de cortauñas de lujo, 8 piezas, rojo y negro',
        tituloProcess: 'Un pequeño lujo para tus uñas',
        parrafos: [
            'Nuestros modelos ofrecen características para adaptarse a las preferencias individuales del usuario, como mecanismos para ajustar el ángulo del corte.',
            'Presentan acabados de lujo, como detalles en oro o plata, grabados personalizados, y diseños estilizados que elevan el producto a un artículo de lujo.'
        ]
    },
    {
        imageProduct: qualityNail,
        imageDecoration: brownStroke,
        altTextProduct: 'Cortauñas premium',
        infoProduct: 'Corta-uñas de lujo con lupa de The First Years',
        tituloProcess: 'Alta calidad en cada producto',
        parrafos: [
            'Fabricado con materiales duraderos, como acero inoxidable, lo que garantiza una larga vida útil sin oxidación ni desgaste rápido.',
            'Cuchillas afiladas y bien diseñadas permiten un corte limpio y preciso, evitando bordes irregulares o roturas en las uñas.'
        ]
    }
];

const reviews = [
    {
        titleReview: 'Productos de calidad',
        descReview: 'Hace unos dias, me empezaron se me empezo a enterrar la uña del pie, mi amigo me recomendo esta pagina y ordene el set de lujo, muy satisfecho.',
        pfpImage: pfpOne,
        userName: 'Dudúa-Moai',
        score: '5',
    },
    {
        titleReview: 'Mi perico lo adora!!!',
        descReview: 'Encontre esta pagina en "X", y me intereso pues mi perico tiene ya largas sus uñas, cuando empeze a ocupar el cortauñas, era como cortar mantequilla!!!',
        pfpImage: pfpFour,
        userName: 'Cipitiyo503',
        score: '4',
    },
    {
        titleReview: 'Super comodo de usar',
        descReview: 'Yo pedi el cortauñas con lupa, pues mi vista ya no es como antes..., cuando lo saque de la caja, todo estaba perfecto! de inmediato me puse a ocuparlo, y se sentia muy natural! Gracias Nailed-It!!!!',
        pfpImage: pfpTwo,
        userName: 'thelostlegend09',
        score: '5',
    },
    {
        titleReview: 'Eficacia en recien nacidos',
        descReview: 'Compre un cortauña pequeño para mi hijo de 5 meses, el cortauñas que me enviaron era super bonito, y se sentia de una forma muy liviana, y facil de usar, normalmente mi hijo odia cortarse las uñas, pero con este no sintio nada!!!',
        pfpImage: pfpThree,
        userName: 'patitojuan2',
        score: '5',
    },
]

export default { cardsData, menuLista, benefits, processInformation, reviews };