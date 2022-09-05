import React from "react";
// Nenhuma alteração aqui
function Header() {
  
    return (
      <nav className="navbar navbar-dark navbar-expand-md bg-dark py-3">
        <div className="container">
          <a
            className="navbar-brand d-flex align-items-center pulse animated"
            href="#"
          />
          <button
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navcol-6"
          >
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse flex-grow-0 order-md-first"
            id="navcol-6"
          >
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#sobre">
                  Sobre
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#tecnologias">
                  Tecnologias
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projetos">
                  Projetos
                </a>
              </li>
            </ul>
            <div className="d-md-none my-2">
              <a href="http://lattes.cnpq.br/1080070426203630" target="blank">
                <button class="btn btn-dark" type="button">
                  CV Lattes
                  </button>
                </a>
                </div>
          </div>
          <div class="d-none d-md-block">
              <a href="http://lattes.cnpq.br/1080070426203630" target="blank">
                <button class="btn btn-dark" type="button">
                  CV Lattes
                  </button>
                </a>
                </div>
        </div>
      </nav>
    );
}

export default Header;
