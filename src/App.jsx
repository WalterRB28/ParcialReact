import React, { useEffect } from 'react';
import './App.css';
import Card from './components/Card/Card';
import data from './data/dataPage.js';
import Category from './components/menu/Category.jsx';
import Benefits from './components/Carrousel/Benefits.jsx';
import Process from './components/Process/Process.jsx';
import Review from './components/Reviews/Review.jsx';
import imagenFinal from './assets/Products/productoFinal.png';
import Modal from './components/Modal/Modal.jsx';
import Promo from './components/Promo/Promo.jsx';
import Footer from './components/Footer/Footer.jsx';


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

	// Codigo para el carrousel de beneficios
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

	// Codigo para pasar las reviews con los botones
	useEffect(() => {
		const reviews = document.querySelectorAll('.review');
		const prevButton = document.querySelector('.prev');
		const nextButton = document.querySelector('.next');
		const reviewWrapper = document.querySelector('.review-wrapper');
		let currentIndexReview = 0;

		function showReview(index) {
			if (index >= reviews.length) {
				currentIndexReview = 0;
			} else if (index < 0) {
				currentIndexReview = reviews.length - 1;
			} else {
				currentIndexReview = index;
			}

			reviewWrapper.style.transform = `translateX(-${currentIndexReview * 100}%)`;
		}

		prevButton.addEventListener('click', () => {
			showReview(currentIndexReview - 1);
		});

		nextButton.addEventListener('click', () => {
			showReview(currentIndexReview + 1);
		});

		showReview(currentIndexReview);
	}, []);

	useEffect(() => {
		var modal = document.getElementById("myModal");
		var btn = document.getElementById("order-now");
		var span = document.getElementsByClassName("close")[0];

		btn.onclick = function () {
			modal.style.display = "block";
		}

		span.onclick = function () {
			modal.style.display = "none";
		}

		window.onclick = function (event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
	});



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

			<h2 class="header-productos">Algunos de nuestros <i class="word">testimonios</i>.</h2>
			<section class="review-container">
				<button class="prev">‹</button>
				<div class="review-wrapper">

					{data.reviews.map((reviews, index) => (
						<Review
							key={index}
							titleReview={reviews.titleReview}
							descReview={reviews.descReview}
							pfpImage={reviews.pfpImage}
							userName={reviews.userName}
							score={reviews.score}
						/>
					))}

				</div>
				<button class="next">›</button>
			</section>

			<h2 class="header-productos">¿Quieres obtener uno de nuestros <i class="word">cortauñas</i>?</h2>
			<section class="others">
				<Promo/>
			</section>

			<div id="myModal" class="modal">
				<div class="modal-content">
					<span class="close" id="close-btn">&times;</span>
					<Modal />
				</div>
			</div>

			<Footer/>
		</>
	);
}

export default App;
