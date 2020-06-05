import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


class TimeLine extends React.Component {
  render(){
    return(
      <div className="timeline">
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
             <div className="col-md-4 text-center">
                <h1>Educación y experiencia Profesional</h1>
             </div>
          </div>
          <br/>
          <VerticalTimeline>
              <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Dic 2017 - Feb 2018"
                    iconStyle={{ background: 'rgb(20, 166, 151)', color: '#fff' }}
                    >
                    <h3 className="vertical-timeline-element-title">Informática, Analista</h3>
                    <h4 className="vertical-timeline-element-subtitle">PwC Chile (Práctica)</h4>
                    <p>
                      Aseguramiento de Procesos de Sistemas (SPA).
                    </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Nov 2017"
                    iconStyle={{ background: 'rgb(242, 193, 46)', color: '#fff' }}
                    >
                    <h3 className="vertical-timeline-element-title">Montaje de eventos</h3>
                    <h4 className="vertical-timeline-element-subtitle">MSI, COUGAR, CORSAIR, IN WIN Y LG</h4>
                    <p>
                      Coordinador Torneo League of Legends y Overwatch.
                    </p>
                    </VerticalTimelineElement>
              <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="Dic 2016 - Ene 2017"
                    iconStyle={{ background: 'rgb(242, 118, 73)', color: '#fff' }}

                    >
                    <h3 className="vertical-timeline-element-title">Informática, Consultor</h3>
                    <h4 className="vertical-timeline-element-subtitle">C.A.R.S. Chile</h4>
                    <p>
                      Consultor y ayudante para mejorar una pagina Web.
                    </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2015 - 2018"
                    iconStyle={{ background: 'rgb(242, 82, 82)', color: '#fff' }}

                    >
                    <h3 className="vertical-timeline-element-title">Ingeniería en Informática</h3>
                    <h4 className="vertical-timeline-element-subtitle">Duoc UC, Chile</h4>
                    <p>
                      Egresado.
                    </p>
              </VerticalTimelineElement>


              </VerticalTimeline>
        </div>
      </div>
    );
  }
}

export default TimeLine;
