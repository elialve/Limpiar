import React from 'react';
import Header from './Header';
import Caida from './Caida';
import TimeLine from './TimeLine';
import Contacto  from './Contacto';
import AboutMe from './AboutMe';
import Fondo from './Fondo';
import Skills from './Skills';
import Galeria from './Galeria';
import PortafolioPage from './PortafolioPage';
import Final from './Final';
class Portafolio extends React.Component {

  state = {
    lleno : 0
  };

  lleno = (lleno) => {
     if (lleno !== 0) {
       this.setState(() => ({lleno:1}))
     }
  }

  render(){
    return (
      <div className="containerTodo" id="conTodo">
          {this.state.lleno !==0 && <Header />}
          {this.state.lleno === 0 && <Caida  lleno ={this.lleno}/> }
          {this.state.lleno !==0 && <div>
            <Fondo />
            <AboutMe />
            <Skills />
            <TimeLine/>
            <Galeria />
            <PortafolioPage />
            <Contacto />
            <Final />
          </div>}

      </div>
    );
  }
}

export default Portafolio;
