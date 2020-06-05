import React from 'react';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";
import ScrollTrigger from 'react-scroll-trigger';


class Skills extends React.Component {
  state = {
    cuenta: 0,
    visible: false,
    estado: true
  }

  interval = () => {
    let interval = setInterval(() => {
      if(!this.state.visible){
        clearInterval(interval);
        return;
      }
      this.setState((prevState) => ({cuenta: prevState.cuenta + 1}));
      if (this.state.cuenta === 100) {
        clearInterval(interval);
      }

    },70);
  }


  onEnterViewport = () =>{
      function sleep(ms = 0) {
        return new Promise(r => setTimeout(r, ms));
      }
      sleep(300).then(() => {
        this.interval();
        this.setState(() => ({ visible:true}));
      });
  }

  onExitViewport = () =>{

     this.setState(() => ({cuenta:0, visible:false}))
  }

  render(){
    return (
        <ScrollTrigger onEnter={this.onEnterViewport} onExit={this.onExitViewport}>
          <div className="skills">
            <div className="container">
              <div className="row">
                 <div className="col-md-12 col-lg-8 text-left">
                    <h3>Skills</h3>
                    <p className="skills_text">A lo largo de mi vida como estudiante de Informática,
                      he podido aprender y desarrollar aplicaciones en diferentes lenguajes de programación.
                      A continuación, se muestran los que he utilizado recientemente.
                    </p>
                 </div>
              </div>
              <br/>
                  <div className="row">
                      <div className="col-m-3 col-lg-3 d-flex justify-content-center align-items-center justify-content-between">
                          <h4 className="">Node JS</h4>
                          <Progress
                            type="circle"
                            percent={this.state.cuenta <45?this.state.cuenta : '45'}
                            width={120}
                            status="error"
                            theme={{
                              error: {
                                symbol: this.state.cuenta <45?this.state.cuenta+'%' : '45%' ,
                                color: 'rgb(242, 157, 53)'
                              }
                            }}
                          />
                        </div>
                        <div className="col-lg-1"></div>
                        <div className="col-m-3 col-lg-3 d-flex justify-content-center align-items-center justify-content-between">
                            <h4 className="">Python</h4>
                            <Progress
                              type="circle"
                              percent={this.state.cuenta <65?this.state.cuenta : '65'}
                              width={120}
                              status="error"
                              theme={{
                                error: {
                                  symbol: this.state.cuenta <65?this.state.cuenta+'%' : '65%' ,
                                  color: 'rgb(242, 193, 46)'
                                }
                              }}
                            />
                          </div>
                          <div className="col-lg-1"></div>
                          <div className="col-m-12 col-lg-3 d-flex justify-content-center align-items-center justify-content-between">
                              <h4 className="">PHP</h4>
                              <Progress
                                type="circle"
                                percent={this.state.cuenta <80?this.state.cuenta : '80'}
                                width={120}
                                status="error"
                                theme={{
                                  error: {
                                    symbol: this.state.cuenta <80?this.state.cuenta+'%' : '80%' ,
                                    color: 'rgb(20, 166, 151)'
                                  }
                                }}
                              />
                            </div>
                  </div>
            </div>
          </div>
        </ScrollTrigger>
    );
  }
}

export default Skills;
