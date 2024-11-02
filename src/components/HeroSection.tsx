"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";

export const HeroSection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <>
      {" "}
      <section id="hero" className="hero section dark-background">
        <img
          src="assets/img/world-dotted-map.png"
          alt=""
          className="hero-bg"
          data-aos="fade-in"
        />

        <div className="container">
          <div className="row gy-4 d-flex justify-content-between">
            <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h2 data-aos="fade-up">
                Seu Parceiro Confiável em Importação e Exportação
              </h2>
              <p data-aos="fade-up" data-aos-delay="100">
                Na Aesy Imports Mozambique, somos especialistas em oferecer
                soluções ágeis e seguras para suas necessidades de importação e
                exportação. Com uma equipe dedicada e experiente, nos orgulhamos
                de ser o elo que conecta sua empresa aos mercados globais.
              </p>
              <form
                action="#"
                className="form-search d-flex align-items-stretch mb-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Frete ou HSCode"
                />
                <button type="submit" className="btn btn-primary">
                  Procurar
                </button>
              </form>

              <div className="row gy-4" data-aos="fade-up" data-aos-delay="300">
                <div className="col-lg-3 col-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="232"
                      data-purecounter-duration="0"
                      className="purecounter"
                    >
                      232
                    </span>
                    <p>Clients</p>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="521"
                      data-purecounter-duration="0"
                      className="purecounter"
                    >
                      521
                    </span>
                    <p>Importações</p>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="1453"
                      data-purecounter-duration="0"
                      className="purecounter"
                    >
                      1453
                    </span>
                    <p>Exportações</p>
                  </div>
                </div>

                <div className="col-lg-3 col-6">
                  <div className="stats-item text-center w-100 h-100">
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="32"
                      data-purecounter-duration="0"
                      className="purecounter"
                    >
                      32
                    </span>
                    <p>Logistica</p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-5 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
            >
              <img
                src="/hero-img.png"
                className="img-fluid mb-3 mb-lg-0"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
