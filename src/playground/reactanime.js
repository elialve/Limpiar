import React from 'react';
import Anime from 'react-anime';
import ReactDOM from 'react-dom';


let App =() => (
      <Anime easing="easeOutElastic"
           loop={true}
           duration={1000}
           direction="alternate"
           delay={(el, index) => index * 240}
           translateX='13rem'
           scale={[.75, .9]}>
        <div className="blue"/>
        <div className="green"/>
        <div className="red"/>
      </Anime>
    );



ReactDOM.render(<App/>, document.getElementById('app'));
