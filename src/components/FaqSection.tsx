"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

export const FaqSection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <>
      <section id="faq" className="faq section">
        <div className="container section-title" data-aos="fade-up">
          <span>Perguntas Frequentes</span>
          <h2>Perguntas Frequentes</h2>
          {/* <p>
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p> */}
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="faq-container">
                <div
                  className="faq-item faq-active"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <i className="faq-icon bi bi-question-circle"></i>
                  <h3>Quais serviços a Aesy Imports Mozambique oferece?</h3>
                  <div className="faq-content">
                    <p>
                      Oferecemos uma gama completa de serviços, incluindo
                      importação e exportação de mercadorias, desembaraço
                      aduaneiro, armazenamento, embalagem de carga e transporte.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>

                <div
                  className="faq-item"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <i className="faq-icon bi bi-question-circle"></i>
                  <h3>O que é desembaraço aduaneiro e por que é importante?</h3>
                  <div className="faq-content">
                    <p>
                      O desembaraço aduaneiro é o processo de liberação de
                      mercadorias pelas autoridades alfandegárias. É essencial
                      para garantir que suas cargas possam entrar ou sair do
                      país sem atrasos e conforme as regulamentações legais.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>

                <div
                  className="faq-item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <i className="faq-icon bi bi-question-circle"></i>
                  <h3>Como posso solicitar uma cotação?</h3>
                  <div className="faq-content">
                    <p>
                      Você pode solicitar uma cotação através do nosso site,
                      preenchendo o formulário de solicitação de cotação ou
                      entrando em contato diretamente com nossa equipe de
                      atendimento ao cliente.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>

                <div
                  className="faq-item"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <i className="faq-icon bi bi-question-circle"></i>
                  <h3>O que devo fazer se tiver problemas com minha carga?</h3>
                  <div className="faq-content">
                    <p>
                      Se você enfrentar qualquer problema com sua carga, entre
                      em contato imediatamente com nossa equipe de atendimento
                      ao cliente. Estamos prontos para ajudar a resolver
                      quaisquer questões que possam surgir.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>

                <div
                  className="faq-item"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <i className="faq-icon bi bi-question-circle"></i>
                  <h3>Quais métodos de transporte vocês utilizam?</h3>
                  <div className="faq-content">
                    <p>
                      Utilizamos transporte terrestre, aéreo e marítimo,
                      dependendo das necessidades do cliente e das
                      características da carga. Trabalhamos com uma rede de
                      parceiros logísticos confiáveis para garantir a melhor
                      solução.
                    </p>
                  </div>
                  <i className="faq-toggle bi bi-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
