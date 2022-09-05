import React from "react";

function Footer(){

    return (
      <footer className="text-center bg-dark">
        <div className="container text-white py-4 py-lg-5">
          <ul className="list-inline">
            <li className="list-inline-item me-4" />
            <li className="list-inline-item me-4" />
            <li className="list-inline-item" />
          </ul>
        
          <a href="http://lattes.cnpq.br/1080070426203630" target="blank">
           <button className="btn btn-primary" type="button">
            CV Lattes
           </button>
          </a>
       
          <p className="text-muted mb-0">
            <br />
            Copyright © 2022
          </p>
          <p className="text-muted mb-0">Ranieri Fernandes</p>
        </div>
        
      </footer>
    );
  }

export default Footer;
