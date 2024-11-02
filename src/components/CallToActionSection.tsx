"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export const CallToActionSection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <>
      <section
        id="call-to-action"
        className="call-to-action section dark-background"
      >
        <Image src="/assets/img/cta-bg.jpg" alt="" height={700} width={1000} />

        <div className="container">
          <div
            className="row justify-content-center"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="col-xl-10">
              <div className="text-center">
                <h3>
                  Precisa de uma Solução Confiável para Importação e Exportação?
                </h3>
                <p>
                  Conte com a expertise da Aesy Imports Mozambique para
                  gerenciar cada etapa do processo logístico, desde o
                  desembaraço aduaneiro até o transporte e armazenamento seguro
                  da sua carga. Oferecemos soluções personalizadas para atender
                  às necessidades específicas do seu negócio.
                </p>
                <a className="cta-btn" href="#">
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
