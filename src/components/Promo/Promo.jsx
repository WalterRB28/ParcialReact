import './Promo.css'
import Card from '../../components/Card/Card';
import imagenFinal from '../../assets/Products/productoFinal.png';


const Promo = () => {
	return (
		<>
			<article className="info-bottom">
				<p>
					Nuestros cortauñas son lideres mundiales, tenemos sucursales por todo el mundo.
					Al hacer tu primera compra, te enviaremos un cortauñas de regalo para tus
					mascotas.
				</p>

				<p>
					Además nuestro diseño ergonomico es facil de usar, ¡y estos te duraran para toda
					tu vida!, así que, ¿qué esperas? ¡Ordena uno ya!
				</p>

				<div className="button-list">
					<button className="button-modal" id="order-now">¡Ordenar ya!</button>
				</div>
			</article>

			<div id="promoImage">
				<Card
					imagen={imagenFinal}
					descImagen='Corta uñas para perros'
					productoDesc='Nuestros cortauñas para perros tienen la mejor calidad en sus pinzas, permitiendoles un corte facil y rapido.'
				/>
			</div>
		</>

	);
};

export default Promo;