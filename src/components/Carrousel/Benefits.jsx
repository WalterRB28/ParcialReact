import './Benefits.css'

const Benefits = ({ imagenBeneficio, altText, titulo, descripcion }) => {
	return (
        <article className="card-benefits">
        <img src={imagenBeneficio} alt={altText}/>
        <div>
          <h3>{titulo}</h3>
          <p>
            {descripcion}
          </p>
        </div>
      </article>
    );
};

export default Benefits;