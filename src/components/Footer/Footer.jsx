import './Footer.css'
import Instagram from '../../assets/Icons/instagramIcon.png';
import Facebook from '../../assets/Icons/facebookIcon.png';
import Telegram from '../../assets/Icons/telegramIcon.png';
import WhatsApp from '../../assets/Icons/whatsappIcon.png';


const Footer = ({ }) => {
	return (
		<>
			<footer className="footer">
				<section className="brand-footer">
					<h2>Nailed-It</h2>
					<h3>Corta tus uñas</h3>
				</section>

				<section className="contact-footer">
					<h2>Contactos</h2>
					<ul>
						<li><a href="#"><img src={Instagram} alt="social_media" /></a></li>
						<li><a href="#"><img src={Facebook} alt="social_media" /></a></li>
						<li><a href="#"><img src={Telegram} alt="social_media" /></a></li>
						<li><a href="#"><img src={WhatsApp} alt="social_media" /></a></li>
					</ul>
				</section>

				<section className="products-footer">
					<h2>Cortauñas</h2>
					<ul>
						<li><a href="#">Bebés</a></li>
						<li><a href="#">Adultos</a></li>
						<li><a href="#">Gato</a></li>
						<li><a href="#">Perro</a></li>
						<li><a href="#">Aves</a></li>
					</ul>
				</section>

				<section className="info-footer">
					<h2>Acerca de</h2>
					<ul>
						<li><a href="#">Politicas de privacidad</a></li>
						<li><a href="#">Terminos y Servicios</a></li>
					</ul>
				</section>
			</footer>
		</>
	);
};

export default Footer;