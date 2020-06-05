import React from 'react';

class Bloque extends React.Component {
  render(){
      return <div className="col bloque"  id={'bloque' + this.props.id}></div>;
  }
}

export default Bloque;
