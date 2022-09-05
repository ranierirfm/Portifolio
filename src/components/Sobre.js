import React from "react";
import "../assets/css/Articles-Badges-images.css";
import minhaFoto from '../assets/img/IMG-20220212-WA0030.jpg';

function Sobre() {
    return (
      <div
        className="container py-4 py-xl-5"
        style={{
          borderBottomStyle: "none"
        }}
      >
        <div className="alert alert-info alert-dismissible" role="alert">
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          />
          <span>
            <strong>Atenção!</strong> Página em desenvolvimento.
          </span>
        </div>
        {}
        <div className="py-4 py-xl-5">
          {}
          <div className="container">
            <div className="bg-dark border rounded border-0 border-dark overflow-hidden">
              <div className="row g-0">
                <div className="col-md-6 d-xl-flex align-items-xl-center">
                  <div
                    className="text-white p-4 p-md-5"
                    data-aos="fade-down"
                    data-aos-duration={1000}
                  >
                    <h1 className="fw-bold text-white mb-3" id="sobre">
                      <span
                        style={{
                          color: 'rgb(13, 110, 253)'
                        }}
                      >
                        Olá!
                      </span>
                      <br />
                      <br />
                    </h1>
                    <p className="mb-4">
                      <span
                        style={{
                          color: "rgb(227, 234, 245)",
                          backgroundColor: "rgba(33, 37, 41, 0)"
                        }}
                      >
                        Me chamo{" "}
                      </span>
                      <strong>
                        <span
                          style={{
                            color: "rgb(227, 234, 245)",
                            backgroundColor: "rgba(33, 37, 41, 0)"
                          }}
                        >
                          Ranieri Fernandes,{" "}
                        </span>
                      </strong>
                      <span
                        style={{
                          color: "rgb(227, 234, 245)",
                          backgroundColor: "rgba(33, 37, 41, 0)"
                        }}
                      >
                         resido na cidade de 
                      </span>
                      <a
                        href="https://www.google.com/maps/place/Condado,+PB,+58714-000/@-6.9082978,-37.608486,15z/data=!3m1!4b1!4m5!3m4!1s0x7a597a2b6793dfb:0xd632db60469eb726!8m2!3d-6.9104011!4d-37.6005909"
                        target="_blank" rel="noreferrer"
                      >
                        <span
                          style={{
                            color: "aliceblue",
                            backgroundColor: "rgba(33, 37, 41, 0)"
                          }}
                        >
                          Condado 
                        </span>
                      </a>
                      <span
                        style={{
                          color: "rgb(227, 234, 245)",
                          backgroundColor: "rgba(33, 37, 41, 0)"
                        }}
                      >
                        interior da Paraíba. Estudante de 
                      </span>
                      <strong>
                        <span
                          style={{
                            color: "rgb(227, 234, 245)",
                            backgroundColor: "rgba(33, 37, 41, 0)"
                          }}
                        >
                          Segurança da Informação
                        </span>
                      </strong>
                      <span
                        style={{
                          color: "rgb(227, 234, 245)",
                          backgroundColor: "rgba(33, 37, 41, 0)"
                        }}
                      >
                         e 
                      </span>
                      <strong>
                        <span
                          style={{
                            color: "rgb(227, 234, 245)",
                            backgroundColor: "rgba(33, 37, 41, 0)"
                          }}
                        >
                          Desenvolvimento Web,
                        </span>
                      </strong>
                      <span
                        style={{
                          color: "rgb(227, 234, 245)",
                          backgroundColor: "rgba(33, 37, 41, 0)"
                        }}
                      >
                          sou apaixonado por tecnologia, desenvolvimento e
                        marcas que trabalhem para contribuir com uma melhor
                        interação digital.
                      </span>
                      <br />
                      <span
                        style={{
                          color: "rgb(227, 234, 245)",
                          backgroundColor: "rgba(33, 37, 41, 0)"
                        }}
                      >
                        Trabalho com tecnologia à mais de 10 anos.
                        <span
                        style={{
                          color: "rgb(227, 234, 245)",
                          backgroundColor: "rgba(33, 37, 41, 0)"
                        }}
                      >
                        Formado em 
                      </span>
                      <strong>
                        <span
                          style={{
                            color: "rgb(227, 234, 245)",
                            backgroundColor: "rgba(33, 37, 41, 0)"
                          }}
                        >
                          Redes de Computadores 
                        </span>
                      </strong>
                      estudo e
                        acredito em ações que possam gerar um impacto positivo
                        na vida das pessoas.
                      </span>
                      <br />
                      <br />
                      <em>
                        <span
                          style={{
                            color: "rgb(227, 234, 245)",
                            backgroundColor: "rgba(33, 37, 41, 0)"
                          }}
                        >
                          "Sou pai de uma princesa linda, gosto de games, de ler
                          e principalmente de aprender coisas novas."
                        </span>
                      </em>
                      <br />
                    </p>
                    <div
                      className="my-3"
                      style={{
                        display: "grid",
                        position: "relative"
                      }}
                    >
                      <a
                        href="https://www.linkedin.com/in/ranieri-fernandes/"
                        target="blank"
                      >
                        <i
                          className="icon ion-social-linkedin-outline text-light"
                          style={{
                            fontSize: "41px",
                            display: "inline"
                          }}
                        />
                      </a>
                      <a
                        href="https://www.instagram.com/ranierirfm/"
                        target="blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="1em"
                          height="1em"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                          className="bi bi-instagram text-light"
                          style={{
                            fontSize: "32px",
                            overflow: "hidden",
                            display: "inline"
                          }}
                        >
                          <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                      </a>
                    </div>
                    <div />
                  </div>
                </div>
                <div
                  className="col-md-6 order-first order-md-last"
                  style={{
                    minHeight: "250px"
                  }}
                >
                  <img
                    className="w-100 h-100 fit-cover"
                    src={ minhaFoto }
                    alt='minha foto'
                  />
                </div>
              </div>
            </div>
          </div>
          {}
        </div>
        {}
      </div>
    );
  }

export default Sobre;
