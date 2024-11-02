"use client";
import React, { useEffect } from "react";
import aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
export const Header = () => {
  useEffect(() => {
    aos.init();
  }, []);
  return (
    <>
      <header
        id="header"
        className="header d-flex align-items-center fixed-top"
      >
        <div className="container-fluid container-xl position-relative d-flex align-items-center">
          <a href="/" className="logo d-flex align-items-center me-auto">
            <Image src="/EasyLogo.png" alt="" width={100} height={180} />
          </a>

          <nav id="navmenu" className="navmenu">
            <ul>
              <li>
                <a href="/" className="active">
                  Ínicio
                  <br />
                </a>
              </li>
              <li>
                <a href="about.html">Sobre</a>
              </li>
              <li>
                <a href="services.html">Serviços</a>
              </li>
              <li>
                <a href="pricing.html">Pricing</a>
              </li>
              <li>
                <a href="contact.html">Contactos</a>
              </li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>

          <a className="btn-getstarted" href="get-a-quote.html">
            Solicitar Cotação
          </a>
        </div>
      </header>
    </>
  );
};
