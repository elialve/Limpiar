import ScrollTrigger from 'react-scroll-trigger';
 
...

  onEnterViewport() {
    this.setState({
      visible: true,
    });
  }

  onExitViewport() {
    this.setState({
      visible: false,
    });
  }

  render() {
    const {
      visible,
    } = this.state;

    return (
      <ScrollTrigger onEnter={this.onEnterViewport} onExit={this.onExitViewport}>
        <div className={`container ${visible ? 'container-animate' : ''}`}>
          hola
        </div>
      </ScrollTrigger>
    );
  }
