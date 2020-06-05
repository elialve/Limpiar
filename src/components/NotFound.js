import React from 'react';

class NotFoundPage extends React.Component {
  render(){
    return (
      <div className=" container">
        <div className="row">
          <div className="col-12"><br/></div>
        </div>
        <div className="row align-items-center">
             <div className="col-5"></div>
             <div className="col-4">
               <h1 className="">404 pagina no econtrada :c</h1>
               <h3><a className="" href="/">Volver a Home</a></h3>
             </div>
             <div className="col"></div>
        </div>
        <div className="row ">
             <div className="col-12">
               <img className=""src="/images/cowboy.jpg" alt="/images/cowboy.jpg" height="500px" width="100%"/>
             </div>

        </div>


      </div>
    );
  }
}

export default NotFoundPage;
