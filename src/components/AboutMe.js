import React from 'react';
import {Animated} from "react-animated-css";
import ScrollTrigger from 'react-scroll-trigger';

class AboutMe extends React.Component {
  state = {
    visibleAbout: false
  }

  viewAbout = () => {
    this.setState({
      visibleAbout:true
    });
  }
  viewNotAbout = () => {
    this.setState({
      visibleAbout:false
    });
  }
    render(){
      return(
          <div className="about">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-center">
                  <img class=" about__fotoPerfil img-fluid redondo "  src="/images/fotoPerfil.jpg" alt=""/>
                </div>
                <div className="col-md-8 col-lg-8  d-flex align-items-center">
                    <ScrollTrigger onEnter={this.viewAbout} onExit={this.viewNotAbout} >
                        <Animated animationIn="zoomIn" animationOut="zoomOut" isVisible={this.state.visibleAbout} animationInDelay="400" >
                          <h3 className="about__title text-center">About Me</h3>
                          <p className="about__text text-center">
                          Estudiante de cuarto año de la Carrera de Ingeniería en Informática.
                          Interesado en el mundo del Diseño y programación de Páginas Web.
                          Me considero una persona resiliente, pro activa para enfrentar nuevos retos y
                          oportunidades que me ayuden a construirme como una mejor persona y mejorar mis habilidades.</p>
                        </Animated>
                    </ScrollTrigger>
                </div>
              </div>
            </div>
          </div>
      );
    }
}
export default AboutMe;
