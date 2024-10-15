import React, { useEffect } from 'react';
import './App.css';
import Card from './components/Card/Card';
import data from './data/dataPage.js';
import Category from './components/menu/Category.jsx';
import Benefits from './components/Carrousel/Benefits.jsx';
import Process from './components/Process/Process.jsx';

function App() {
  // Código para hacer el menú fijo
  useEffect(() => {
    const navToggle = document.querySelector('.nav-toggle');
    const listContainer = document.querySelector('.list-container');

    const handleToggle = () => {
      listContainer.classList.toggle('active');
      navToggle.classList.toggle('active');
    };

    navToggle.addEventListener('click', handleToggle);

    return () => {
      navToggle.removeEventListener('click', handleToggle);
    };
  }, []);

  useEffect(() => {
    const cards = document.querySelectorAll('.card-benefits');
    let currentIndex = 0;

    function showCard(index) {
      cards.forEach((card, i) => {
        if (i === index) {
          card.classList.add('active');

        } else {
          card.classList.remove('active');
        }
      });
    }

    function nextCard() {
      if (currentIndex < cards.length - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }

      showCard(currentIndex);
    }

    showCard(currentIndex);

    setInterval(nextCard, 10000);
  }, []);

  return (
    <>
      <div id="nav-fixed">
        <nav className="nav-main">
          <h1>Nailed-It</h1>
          <div className="nav-toggle">
            <span id="line-1"></span>
            <span id="line-2"></span>
            <span id="line-3"></span>
          </div>
          <div className="list-container">
            {data.menuLista.map((category, index) => (
              <Category key={index} category={category} />
            ))}
          </div>
        </nav>
      </div>

      <section className="products">
        <h2 className='header-productos'>Explora nuestros <i className="word">productos</i>.</h2>
        {data.cardsData.map((card, index) => (
          <Card
            key={index}
            imagen={card.imagen}
            descImagen={card.descImagen}
            productoDesc={card.productoDesc}
          />
        ))}
      </section>

      <h2 class="header-productos">Descubre los <i class="word">beneficios</i>.</h2>
      <section class="benefits">
        {data.benefits.map((benefits, index) => (
          <Benefits
            key={index}
            imagenBeneficio={benefits.imagenBeneficio}
            altText={benefits.altText}
            titulo={benefits.titulo}
            descripcion={benefits.descripcion}
          />
        ))}
      </section>

      <h2 className="header-productos">¿Qué nos <i className="word">diferencia</i>?</h2>
      <section className="process">
        {data.processInformation.map((processInfo, index) => (
          <Process key={index} processInformation={processInfo} />
        ))}
      </section>
    </>
  );
}

export default App;
