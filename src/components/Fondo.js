import React from 'react';
import { Animated } from "react-animated-css";
import ScrollTrigger from 'react-scroll-trigger';

class Fondo extends React.Component {
  state = {
    visibleMed: true,
    visibleTit: true,
    titulo: ['Hola me llamo Elías Alveal.', 'Bienvenidos a mi Portafolio.', 'Date una vuelta.'],
    tituloChange: '',
    letra: 1,
    count: 0,
    estado: true,
    estadoLinea: true
  }
  interval = setInterval(() => {
    if (this.state.estadoLinea) {
      if (this.state.primero) {
        function sleep(ms = 0) {
          return new Promise(r => setTimeout(r, ms));
        }
        sleep(200).then(() => {
          this.cambioTitulo();
          this.setState(() => ({ primero: false }));
        });

      } else {
        this.cambioTitulo();
      }
    }

  }, 90);
  viewTitulo = () => {
    this.setState({
      visibleTit: true
    });
  }
  viewNotTitulo = () => {
    this.setState({
      visibleTit: false
    });
  }
  viewTituloMed = () => {
    this.setState({
      visibleMed: true
    });
  }
  viewNotTituloMed = () => {
    this.setState({
      visibleMed: false
    });
  }
  cambioTitulo = () => {
    if (!this.state.visibleTit) {
      this.setState((prevState) => ({ estado: true, count: 0, letra: 1 }));
      return;
    }
    function sleep(ms = 0) {
      return new Promise(r => setTimeout(r, ms));
    }
    const count = this.state.count;
    const letra = this.state.letra;
    let titulo = this.state.titulo[count];

    titulo = titulo.substr(0, letra);
    if (this.state.estado) {
      this.setState((prevState) => ({ tituloChange: titulo + "|", letra: prevState.letra + 1 }));
    } else {
      this.setState((prevState) => ({ tituloChange: titulo + "|", letra: prevState.letra - 1 }));
    }
    if (letra === 0) {
      if (count === 2) {
        this.setState((prevState) => ({ estado: true, count: 0, letra: 1 }));
        return;
      }
      this.setState((prevState) => ({ estado: true, count: prevState.count + 1, letra: 1 }));
    }
    if (letra === this.state.titulo[count].length) {

      this.setState(() => ({ estadoLinea: false }));
      sleep(400).then(() => {
        this.setState((prevState) => ({ tituloChange: titulo + "" }))
      });
      sleep(800).then(() => {
        this.setState((prevState) => ({ tituloChange: titulo + "|" }))
      });
      sleep(1200).then(() => {
        this.setState((prevState) => ({ tituloChange: titulo + " " }))
      });
      sleep(1600).then(() => {
        this.setState((prevState) => ({ estadoLinea: true, tituloChange: titulo + "|" }))
        this.setState(() => ({ estado: false }));
      });

    }
  }

  render() {
    return (
      <div className="container container--fondo">
        <div className="row">
          <div className="col-12 col-md-12 ">
            <ScrollTrigger onEnter={this.viewTituloMed} onExit={this.viewNotTituloMed} >
              <Animated animationIn="fadeInDown" animationOut="fadeOutUp" isVisible={this.state.visibleMed} animationInDelay="200" animationOutDelay="200">
                <h2 className="tituloMed text-center">WEB DEVELOPER   FRONTEND | BACKEND</h2>
              </Animated>
            </ScrollTrigger>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-12 col-md-8">
            <ScrollTrigger onEnter={this.viewTitulo} onExit={this.viewNotTitulo} >
              <Animated animationIn="fadeInLeft" animationOut="fadeOutLeft" isVisible={this.state.visibleTit} animationInDelay="200" animationOutDelay="200">
                <h1 className="tituloCentral text-left" id="cambioTit">{this.state.tituloChange}</h1>
              </Animated>
            </ScrollTrigger>
          </div>
        </div>
      </div>
    );
  }
}


{/* <div class="img-fluid">
    <Animated animationIn="tada"isVisible={true} animationInDelay="200">
        <h2 className="tituloMed"> Web Developer Frontend | Backend </h2>
    </Animated>
  <Animated animationIn="fadeInLeft" animationOut="zoomOutDown" isVisible={true} animationInDelay="200">
    <div className="titulo">
         <div>
           <h1 className="tituloCentral">Elías Alveal</h1>
         </div>
         <img src="/images/mini-ePortfolio.png" alt="" className="imagenCentral"/>
    </div>
  </Animated>
</div> */}
export default Fondo;
