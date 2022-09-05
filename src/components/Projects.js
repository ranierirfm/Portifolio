import React from "react";
import gamarraProducao from '../assets/img/gamarra-em-produção.png';
import ladeiraProducao from '../assets/img/ladeira-filmes-logo-em-produção.png';

function Projects(){

    return (
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div
            className="col-md-8 col-xl-6 text-center mx-auto"
            style={{
              borderBottom: "1px none var(--bs-blue)"
            }}
          >
            <div
            id="projetos"
              style={{
                width: "150px",
                display: "inline-block",
                borderBottom: "2px solid var(--bs-blue)"
              }}
            />
          </div>
        </div>
        <div
          className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3"
          data-aos="fade-up"
          data-aos-duration={1000}
        >
          <div className="col" data-bss-hover-animate="pulse">
            <div className="card">
              <img
                className="card-img-top  w-100 d-block fit-cover"
                style={{
                  height: "200px",
                  
                }}
                src={ ladeiraProducao }
                alt="img null"
              />
              <div 
              className="card-body p-4"
              >
                <p className="text-primary card-text mb-0">Em desenvolvimento</p>
                <h4 className="card-title">Em breve</h4>
                <p className="card-text">
                Aqui estarão alguns projetos separados com todo carinho para vocês conferirem.
                 {  }
                </p>
                <div className="d-flex">
                  <a
                    href="https://github.com/ranierirfm"
                    style={{
                      color: "var(--bs-card-cap-bg)"
                    }}
                  >
                    <i
                      className="fab fa-github"
                      data-aos="fade"
                      style={{
                        fontSize: "40px",
                        display: "block",
                        color: "var(--bs-gray-900)",
                        borderBottomStyle: "none"
                      }}
                    />
                  </a>
                  <div>
                    <p
                      className="fw-bold mb-0"
                      style={{
                        color: "var(--bs-gray-900)"
                      }}
                    >
                       Ranieri
                    </p>
                    <p className="text-muted mb-0"> Fernandes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" data-bss-hover-animate="pulse">
            <div className="card">
              <img
                className="card-img-top w-100 d-block fit-cover"
                alt="img null"
                style={{
                  height: "200px"
                }}
                src={ gamarraProducao }
              />
              <div className="card-body p-4">
                <p className="text-primary card-text mb-0">Em desenvolvimento</p>
                <h4 className="card-title">Em breve</h4>
                <p className="card-text">
                Aqui estarão alguns projetos separados com todo carinho para vocês conferirem
                </p>
                <div className="d-flex">
                  <a
                    href="https://github.com/ranierirfm"
                    style={{
                      color: "var(--bs-card-cap-bg)"
                    }} rel="noopener noreferrer"
                  >
                    <i
                      className="fab fa-github"
                      data-aos="fade"
                      style={{
                        fontSize: "40px",
                        display: "block",
                        color: "var(--bs-gray-900)",
                        borderBottomStyle: "none"
                      }}
                    />
                  </a>
                  <div>
                    <p
                      className="fw-bold mb-0"
                      style={{
                        color: "var(--bs-gray-900)"
                      }}
                    >
                       Ranieri
                    </p>
                    <p className="text-muted mb-0"> Fernandes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col" data-bss-hover-animate="pulse">
            <div className="card">
              <img
                className="card-img-top w-100 d-block fit-cover"
                alt="img null"
                style={{
                  height: "200px"
                }}
                src="https://cdn.bootstrapstudio.io/placeholders/1400x800.png"
              />
              <div className="card-body p-4">
                <p className="text-primary card-text mb-0">Agendamento</p>
                <h4 className="card-title">Disponível</h4>
                <p className="card-text">
                Aqui estarão alguns projetos separados com todo carinho para vocês conferirem.
                </p>
                <div className="d-flex">
                  <a
                    href="https://github.com/ranierirfm"
                    style={{
                      color: "var(--bs-card-cap-bg)"
                    }}
                  >
                    <i
                      className="fab fa-github"
                      data-aos="fade"
                      style={{
                        fontSize: "40px",
                        display: "block",
                        color: "var(--bs-gray-900)",
                        borderBottomStyle: "none"
                      }}
                    />
                  </a>
                  <div>
                    <p
                      className="fw-bold mb-0"
                      style={{
                        color: "var(--bs-gray-900)"
                      }}
                    >
                       Ranieri
                    </p>
                    <p className="text-muted mb-0"> Fernandes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

export default Projects;
