"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export const AboutSection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <>
      <section id="about" className="about section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 position-relative align-self-start order-lg-last order-first"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <Image
                src="/about.jpg"
                className="img-fluid"
                alt=""
                height={700}
                width={700}
              />
              <a href="#" className="glightbox pulsating-play-btn"></a>
            </div>

            <div
              className="col-lg-6 content order-last  order-lg-first"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3>Sobre Nós</h3>
              <p>
                Fundada com o objetivo de conectar Moçambique ao mundo, a Aesy
                Imports Mozambique é uma empresa especializada em serviços de
                importação e exportação. Ao longo dos anos, estabelecemos uma
                reputação sólida por nossa competência e compromisso com a
                excelência, tornando-nos um parceiro confiável para empresas que
                desejam expandir seu alcance internacionalmente.
              </p>
              <ul>
                <li>
                  <i className="bi bi-diagram-3"></i>
                  <div>
                    <h5>Nossa Missão</h5>
                    <p>
                      Nossa missão é simplificar o comércio internacional para
                      empresas de diversos setores, oferecendo soluções
                      logísticas seguras, rápidas e personalizadas.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="bi bi-fullscreen-exit"></i>
                  <div>
                    <h5>Nossa Visão</h5>
                    <p>
                      Ser referência em importação e exportação em Moçambique,
                      reconhecida por nossa integridade, eficiência e capacidade
                      de superar as expectativas dos nossos clientes.
                    </p>
                  </div>
                </li>
                <li>
                  <i className="bi bi-broadcast"></i>
                  <div>
                    <h5>Nossos Valores</h5>
                    <p>Integridade, Eficiência, Inovação</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
