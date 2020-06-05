import React from 'react';
import Bloque from './Bloque.js';
class Caida extends React.Component {
  state = {
    matriz:[],
    fil: 0,
    col: undefined,
    lleno: 0,
    titulo: 0
  };
  columnas = 6;
  filas = 6;
  matriz = new Array(this.columnas);
  interval = setInterval(() => {
    if(this.state.matriz.length === 0){
      this.matrizLlenar();
    }
    this.fall();
  },60);
  matrizLlenar = () => {
    let count= 0;
    for (var i = 1; i < this.columnas; i++) {
          this.matriz[i] = new Array(this.filas);
          for (var j = 1; j < this.filas; j++) {
                 count++;
                 this.matriz[i][j] = 0;
          }
    }
    this.setState(() => ({matriz:this.matriz}));
  }
  columnaRandom = () => {
    const randomCol =  Math.floor(Math.random() * (this.columnas - 1)) + 1;
    if (randomCol === this.columnas)return;
    return randomCol;
  }
  fall = () => {
      if (this.lleno()){
        this.changeFondo();
        return;
      }
      const fil = this.state.fil;
      const randomCol =  this.state.col?this.state.col:this.columnaRandom();
      if (this.matriz[randomCol][fil] === 1 ) {
        this.setState((prevState) => ({col: undefined, fil: 0}));
        return;
      }
      if (fil > 0) {
        this.matriz[randomCol][fil-1] = 2;
      }
      this.matriz[randomCol][fil] = 1;
      this.setState((prevState) => ({matriz:this.matriz, col: randomCol, fil: prevState.fil + 1 }));
      if(fil === this.filas-1) {
        this.setState((prevState) => ({col: undefined, fil: 0}));
      }

  }
  lleno = (props) => {
    let count = 0;
    for (var i = 1; i < this.columnas; i++) {
      for (var j = 1; j< this.filas; j++) {
        if (this.matriz[i][j] === 1) {
            count++;
        }
      }
    }
    const bloques = (this.columnas-1)*(this.filas-1);
    if (count === bloques) {
      clearInterval(this.interval);
      this.props.lleno(1);
      this.setState(() => ({lleno: 1}));
      return true;
    }
    return false;
  }
  changeFondo = () => {
   
    const particulas = document.getElementById('particles-js');
    particulas.className = 'particulas-visible';
 
  }
  listo = () => {
    clearInterval(this.interval);
    this.props.lleno(1);
    this.setState(() => ({lleno: 1}));
    this.changeFondo();
    }
  render(){
    return (
      <div id="prin" onClick={this.listo}>
        <div className="container-fluid" >
           {this.state.matriz.map((col, i) => <div className="row" key={i}> {this.state.matriz.map(row => <Bloque id={row[i]}/>) }</div>)}
        </div>
      </div>

    );
  }
}

export default Caida;
