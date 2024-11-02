"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export const FeaturesSection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <>
      {" "}
      <section id="features" className="features section">
        <div className="container section-title" data-aos="fade-up">
          <span>Nossas Características</span>
          <h2>Nossas Características</h2>
          <p>
            Na Aesy Imports Mozambique, oferecemos um serviço completo que
            inclui desde a embalagem de carga até o transporte e desembaraço,
            garantindo a integridade e segurança das suas mercadorias em cada
            etapa.
          </p>
        </div>

        <div className="container">
          <div className="row gy-4 align-items-center features-item">
            <div
              className="col-md-5 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="100"
            >
              <Image
                height={1000}
                width={1000}
                src="/assets/img/features-1.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-7" data-aos="fade-up" data-aos-delay="100">
              <h3>Transparência e Confiabilidade</h3>
              <p className="fst-italic">
                Mantemos nossos clientes informados em cada etapa do processo,
                assegurando que você tenha total visibilidade sobre o status da
                sua carga.
              </p>
              {/* <ul>
                <li>
                  <i className="bi bi-check"></i>
                  <span>
                    {" "}
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>Ullam est qui quos consequatur eos accusamus.</span>
                </li>
              </ul> */}
            </div>
          </div>

          <div className="row gy-4 align-items-center features-item">
            <div
              className="col-md-5 order-1 order-md-2 d-flex align-items-center"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <Image
                height={1000}
                width={1000}
                src="/assets/img/features-2.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div
              className="col-md-7 order-2 order-md-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3>Tecnologias Avançadas</h3>
              <p className="fst-italic">
                Utilizamos tecnologia de ponta para gerenciar nossa logística e
                operações, garantindo eficiência e controle em tempo real.
              </p>
              {/* <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p> */}
            </div>
          </div>

          <div className="row gy-4 align-items-center features-item">
            <div
              className="col-md-5 d-flex align-items-center"
              data-aos="zoom-out"
            >
              <Image
                height={1000}
                width={1000}
                src="/assets/img/features-3.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-7" data-aos="fade-up">
              <h3>Atendimento ao Cliente Dedicado</h3>
              <p>
                Nossa equipe de atendimento ao cliente está sempre disponível
                para responder suas perguntas e oferecer suporte em todas as
                etapas do processo logístico.
              </p>
              {/* <ul>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check"></i>
                  <span>
                    {" "}
                    Duis aute irure dolor in reprehenderit in voluptate velit.
                  </span>
                </li>
                <li>
                  <i className="bi bi-check"></i>{" "}
                  <span>
                    Facilis ut et voluptatem aperiam. Autem soluta ad fugiat
                  </span>
                  .
                </li>
              </ul> */}
            </div>
          </div>

          <div className="row gy-4 align-items-center features-item">
            <div
              className="col-md-5 order-1 order-md-2 d-flex align-items-center"
              data-aos="zoom-out"
            >
              <Image
                height={1000}
                width={1000}
                src="/assets/img/features-4.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-md-7 order-2 order-md-1" data-aos="fade-up">
              <h3>Expertise em Comércio Internacional</h3>
              <p className="fst-italic">
                Com anos de experiência no setor, nossa equipe está pronta para
                atender às suas necessidades de importação e exportação,
                garantindo um processo tranquilo e eficiente.
              </p>
              {/* <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
