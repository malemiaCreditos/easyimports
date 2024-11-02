"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

export const ServicesSection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <>
      <section id="services" className="services section">
        <div className="container section-title" data-aos="fade-up">
          <span>
            Nossos Serviços
            <br />
          </span>
          <h2>Nossos Serviços</h2>
          <p>
            Quer saber como podemos ajudar a impulsionar o crescimento do seu
            negócio? Fale com a nossa equipe hoje mesmo e descubra as vantagens
            de ter a Aesy Imports Mozambique como seu parceiro em importação e
            exportação.
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src="assets/img/service-1.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h3>Armazenamento</h3>
                <p>
                  Oferecemos serviços de armazenamento seguro para produtos
                  importados e exportados. Nossas instalações são equipadas para
                  garantir a conservação dos itens e atender às necessidades
                  específicas de cada cliente, reduzindo os custos logísticos e
                  permitindo um gerenciamento eficiente de estoque.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src="assets/img/service-2.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <a href="#" className="stretched-link">
                    Logística Integrada
                  </a>
                </h3>
                <p>
                  Nossa infraestrutura e equipe especializada permitem que
                  ofereçamos um serviço completo de logística integrada.
                  Gerenciamos todas as etapas do processo, desde o armazenamento
                  até o transporte final, garantindo uma operação ágil e sem
                  complicações.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src="assets/img/service-3.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <a href="#" className="stretched-link">
                    Desembaraço de Carga
                  </a>
                </h3>
                <p>
                  Com expertise em desembaraço aduaneiro, nossa equipe assegura
                  que sua carga passe pelos trâmites alfandegários de forma
                  rápida e sem complicações. Trabalhamos diretamente com as
                  autoridades locais para garantir que todas as exigências
                  legais sejam cumpridas, minimizando atrasos e evitando custos
                  adicionais.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src="assets/img/service-4.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <a href="#" className="stretched-link">
                    Transporte de Carga
                  </a>
                </h3>
                <p>
                  Com soluções personalizadas para transporte de carga, a Aesy
                  Imports garante que sua mercadoria seja entregue de forma
                  segura e dentro dos prazos estabelecidos. Trabalhamos com uma
                  rede de parceiros logísticos experientes para oferecer opções
                  de transporte terrestre, aéreo e marítimo.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src="assets/img/service-5.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h3>Embalagem de Carga</h3>
                <p>
                  Oferecemos serviços de embalagem personalizados para proteger
                  sua carga durante o transporte e armazenamento. Utilizamos
                  materiais de alta qualidade e técnicas adequadas para cada
                  tipo de produto, minimizando riscos de danos e assegurando que
                  as mercadorias cheguem ao destino final em perfeitas
                  condições.
                </p>
              </div>
            </div>

            <div
              className="col-lg-4 col-md-6"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="card">
                <div className="card-img">
                  <img
                    src="assets/img/service-6.jpg"
                    alt=""
                    className="img-fluid"
                  />
                </div>
                <h3>
                  <a href="#" className="stretched-link">
                    Importação e Exportação
                  </a>
                </h3>
                <p>
                  Facilitamos o comércio entre Moçambique e o mundo, ajudando
                  empresas a importar produtos com segurança e a expandir seus
                  negócios internacionalmente. Cuidamos de toda a documentação,
                  regulamentação e logística para que suas mercadorias possam
                  entrar ou sair do país sem complicações. Seja importando
                  matérias-primas ou exportando produtos locais, garantimos que
                  o processo seja eficiente e de acordo com as exigências
                  legais.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
