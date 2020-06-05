import React from 'react';
import ReactDOM from 'react-dom';
import { Motion, spring } from 'react-motion';

const Hero = (props) => (
  <Motion
    defaultStyle={{ opacity: 0}}
    style ={{
      opacity: spring(1, { stiffness:20, damping: 4}) }}
    >
    {
      ({opacity}) =>
      <nav style={{opacity}}>
        <h1>ALoja</h1>
      </nav>
    }
  </Motion>
);

ReactDOM.render(< Hero/>, document.getElementById('app'));
