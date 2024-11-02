"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export const FooterSection = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <>
      <footer id="footer" className="footer dark-background">
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <Image src="/EasyLogo.png" alt="" width={100} height={180} />
              </a>
              <p>
                Oferecemos um serviço completo que inclui desde a embalagem de
                carga até o transporte e desembaraço, garantindo a integridade e
                segurança das suas mercadorias em cada etapa.
              </p>
              <div className="social-links d-flex mt-4">
                <a href="#">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="#">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Sobre</a>
                </li>
                <li>
                  <a href="#">Termos e Condições</a>
                </li>
                <li>
                  <a href="#">Politicas de Privacidade</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-6 footer-links">
              <h4>Serviços</h4>
              <ul>
                <li>
                  <a href="#">Importação</a>
                </li>
                <li>
                  <a href="#">Exportação</a>
                </li>
                <li>
                  <a href="#">Desembaraço de Carga</a>
                </li>
                <li>
                  <a href="#">Transporte de Carga</a>
                </li>
                <li>
                  <a href="#">Logística Integrada</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4>Contactos</h4>
              <p>Bairro do Aeroporto A, Rua de Camões</p>
              <p>Maputo, Moçambique</p>
              <p className="mt-4">
                <strong>Cell:</strong> <span>+258 86 840 8600</span>
              </p>
              <p>
                <strong>Email:</strong>{" "}
                <span>easyimportsmozambique@gmail.com</span>
              </p>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">Easy Imports Mozambique</strong>{" "}
            <span>Todos direitos reservados</span>
          </p>
          <div className="credits">
            Desenvolvido por{" "}
            <a href="www.systemsmanager.co.mz">Systems Manager, Lda.</a>
          </div>
        </div>
      </footer>
    </>
  );
};
