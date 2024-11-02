"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

export const FeaturedServicesSection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <>
      <section id="featured-services" className="featured-services section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="icon flex-shrink-0">
                <i className="fa-solid fa-cart-flatbed"></i>
              </div>
              <div>
                <h4 className="title">Exportação</h4>
                <p className="description">
                  Ajudamos empresas locais a expandirem seus negócios além das
                  fronteiras. Cuidamos de todas as etapas, desde a documentação
                  até o envio, para que seus produtos cheguem ao destino final
                  com eficiência e segurança.
                </p>
                <a href="#" className="readmore stretched-link">
                  <span>Ver mais</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="icon flex-shrink-0">
                <i className="fa-solid fa-truck"></i>
              </div>
              <div>
                <h4 className="title">Logística Integrada</h4>
                <p className="description">
                  Contamos com uma infraestrutura robusta e parcerias
                  estratégicas para oferecer um serviço de logística eficiente,
                  reduzindo custos e garantindo o cumprimento dos prazos.
                </p>
                <a href="#" className="readmore stretched-link">
                  <span>Ver mais</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6 service-item d-flex"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="icon flex-shrink-0">
                <i className="fa-solid fa-truck-ramp-box"></i>
              </div>
              <div>
                <h4 className="title">Importação</h4>
                <p className="description">
                  Facilitamos o processo de importação de produtos de alta
                  qualidade, seja para revenda, indústria ou projetos especiais.
                  Nossa rede de parceiros internacionais garante o acesso a
                  produtos dos principais mercados globais, com um serviço
                  personalizado e seguro.
                </p>
                <a href="#" className="readmore stretched-link">
                  <span>Ver mais</span>
                  <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
