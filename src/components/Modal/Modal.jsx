import './Modal.css'
const Modal = ({ }) => {
    return (
        <section className="form-update">
            <h3>Registrate con <i class="word">nosotros</i>!</h3>
            <form className="actual-form" action="" id="form">
            
              <div className="form-area">
                <label for="name">Nombre</label>
                <input type="text" id="name" name="name" required/>
                <label className="bad-response">Informacion Incorrecta</label>
              </div>
            
              <div className="form-area">
                <label for="last-name">Apellido</label>
                <input type="text" id="last-name" name="last-name"/>
              </div>
            
              <div className="form-area">
                <label for="email">Correo Electrónico</label>
                <input type="email" id="email" name="email" required/>
              </div>
            
              <div className="form-area">
                <label for="phone-number">Número de Celular</label>
                <input type="text" id="phone-number" name="phone-number" pattern="[0-9]{8}"/>
              </div>

              <input className="button-send" type="submit" value="Send"/>
            </form>
        </section>
    );
};

export default Modal;