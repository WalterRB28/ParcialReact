import './Process.css'
const Process = ({ processInformation }) => {
    return (
        <article>
            <div className="steps">
                <div className="steps-image">
                    <img src={processInformation.imageProduct} alt={processInformation.altTextProduct} />
                    <p>
                        {processInformation.infoProduct}
                        <button>Más informacion</button>
                    </p>
                    <img id="stroke-paint" src={processInformation.imageDecoration} alt="" />
                </div>
                <div className="process-information">
                    <h3>{processInformation.tituloProcess}</h3>
                    {processInformation.parrafos.map((parrafo, index) => (
                        <p key={index}>
                            {parrafo}
                        </p>
                    ))}
                </div>
            </div>
        </article>
    );
};

export default Process;