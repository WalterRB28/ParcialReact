import './Card.css'

function Card({ imagen, descImagen, productoDesc }) {
  return (
    <article>
      <div className="product-image">
        <img src={imagen} alt={descImagen} />
        <div className="product-information">
          <p>
            {productoDesc}
          </p>
          <button className="button">Más Información</button>
        </div>
      </div>
    </article>
  );
}

export default Card;