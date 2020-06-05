import React from 'react';
import axios from 'axios';
class ContactPage extends React.Component {

  state = {
    mensaje: ""
  };



  correo = (e) =>{
    e.preventDefault();
    const nombre = e.target.elements.nombre.value;
    const correo = e.target.elements.correo.value;
    const asunto = e.target.elements.asunto.value;
    const mensaje = e.target.elements.mensaje.value; 

    axios.post('/contacto', {
        nombre: nombre,
        correo: correo,
        asunto: asunto,
        mensaje: mensaje
    })
    .then((response) => {
      this.setState(() => ({mensaje: response.data}));
    })
    .catch((error) =>{
      this.setState(() => ({mensaje:"Error "}));
    });
  }

  

  render(){
    return(
          <div className="contacto">
          <div className="container">
            <div className="row">
              <div className="col-lg-5"></div>
              <div className="col-lg-2">
                <h1 className="contacto__title">Contacto</h1>
              </div>
              <div className="col-lg-5"></div>
            </div>
              <form onSubmit={this.correo}>
                  <div className="row">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-4">
                        <div class="form-group">
                          <label>Nombre y apellido</label>
                          <input type="text" name="nombre" className="form-control" placeholder="Ingrese nombre y apellido"/>
                        </div>
                        <div className="form-group">
                          <label>Email</label>
                          <input type="email" name="correo" className="form-control" placeholder="Ingrese su email"/>
                        </div>
                        <div class="form-group">
                          <label for="exampleInputEmail1">Asunto</label>
                          <input type="text" name="asunto" className="form-control"  placeholder="Ingrese Asunto"/>
                        </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="form-group">
                      <label>Mensaje</label>
                      <textarea className="form-control contacto__texarea" name="mensaje" placeholder="Ingrese su mensaje"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary contacto__boton">Enviar Mensaje</button>
                  </div>
                  <div>
                    {this.state.mensaje}
                  </div>
              </div>
            </form>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6"><img className="img-fluid img-contact"src="/images/10.png" /></div>
                <div className="col-lg-3"></div>
            </div>
            
          </div>
              
        </div>
    );
  }
}





export default ContactPage;
