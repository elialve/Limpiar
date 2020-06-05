import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import * as Scroll from 'react-scroll';
import { Link, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

class Section extends React.Component{
  componentDidMount() {

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollToBottom() {
    scroll.scrollToBottom();
  }
  scrollTo() {
    scroll.scrollTo(100);
  }
  scrollMore() {
    scroll.scrollMore(100);
  }
  handleSetActive(to) {
    console.log(to);
  }
  render() {
  	return (
      <div>

        <Link className="test6" to="anchor" spy={true} smooth={true} duration={500}>
          Test 6 (anchor)
        </Link>


        <div id="anchor" className="element">
          test 6 (anchor)
        </div>


        <br/>
        <a onClick={this.scrollToBottom}>To the bottom!</a>
        <br/>
        <a onClick={this.scrollTo}>Scroll to 100px from the top</a>
        <br/>
        <a onClick={this.scrollMore}>Scroll 100px more from the current position!</a>
        <a onClick={this.scrollToTop}>To the top!</a>
      </div>
	);
  }
};

 ReactDOM.render(<Section />, document.getElementById('app'));
