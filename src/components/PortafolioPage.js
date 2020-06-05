import React from 'react';


class PortafolioPage extends React.Component {
  render(){
    return (
      <div className="portaPage">
        <div class="container">
           <h3 className="text-center">Portafolio - Trabajos Realizados</h3>
           <h6 className="text-center">Proyectos realizados durante la Carrera</h6>
           <br/>
            <div className="row">
              <div className="col-lg-4 itemPorta">
                <h4>E-commerce Digital Advance</h4>
                <h6>Desarrollado con Python, Bootstrap y subido a Heroku</h6>
                <img className="img-thumbnail img-porta"src="/images/digitalAdvance.png" alt="/images/digitalAdvance.png"/>
              </div>
              <div className="col-lg-4 itemPorta">
                <h4>E-commerce Box</h4>
                <h6>Desarrollado con Node js, Bootstrap y subido a Heroku</h6>
                <img className="img-thumbnail img-porta"src="/images/Box.png" alt="/images/digitalAdvance.png"/>
              </div>
              <div className="col-lg-4 itemPorta">
                <h4>E-commerce Cars Chile</h4>
                <h6>Desarrollado con Mercadoshop para empresa C.A.R.S. Chile</h6>
                <img className="img-thumbnail img-porta"src="/images/cars.png" alt="/images/cars.png"/>
              </div>
            </div>
        </div>
      </div>

    );
  }
}

export default PortafolioPage;
