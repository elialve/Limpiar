import React from 'react';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


class Header extends React.Component {
  scrollToAbout = () => {
    scroll.scrollTo('about');
  }
  render(){
    return(
      <div className="container-fluid">
          <nav id="menu" className="navbar navbar-expand-lg fixed-top header">
            {scroll.scrollToTop()}
            <div className="container">
              <a className="header__title navbar-brand">Portafolio</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><img className="header__menu" src="/images/icons8-menú-cuadrado-24.png" alt=""/></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <div className="header__link ">
                  <Link  onClick={scroll.scrollToTop} spy={true} smooth={true} duration={5000}>Home</Link>
                  <Link  to="about" spy={true} offset={-60} smooth={true} duration={1800}>About Me</Link>
                  <Link  to="skills" spy={true} offset={-60} smooth={true} duration={1800}>Skills</Link>
                  <Link  to="timeline" spy={true} offset={-60} smooth={true} duration={1800}>Time Line</Link>
                  <Link  to="galeria" spy={true} offset={-60} smooth={true} duration={1800}>Galería</Link>
                  <Link  to="portaPage" spy={true} offset={-60} smooth={true} duration={1800}>Portafolio</Link>
                  <Link  to="contacto" spy={true} offset={-60} smooth={true} duration={1800}>Contacto</Link>
                </div>
              </div>
            </div>
        </nav>
      </div>
    );
  }
}


export default Header;
{/* <header className="header fixed-top ">
    {scroll.scrollToTop()}
    <div className="header__container">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div  className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">Hidden brand</a>
        <h1 className="header__title">Portafolio</h1>
        <div className="header__link ">
          <Link  to="header" spy={true} smooth={true} duration={500}>Home</Link>
          <Link  to="portafolio" spy={true} smooth={true} duration={500}>Portafolio</Link>
          <Link  to="contacto" spy={true} smooth={true} duration={500}>Contacto</Link>
        </div>
      </div>
    </div>
</header> */}
