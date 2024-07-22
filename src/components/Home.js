// src/components/Home.js
import React from "react";
import "./Home.css"; // Asegúrate de crear este archivo para agregar estilos personalizados

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Hablando con las Manos</h1>
        <p>Bienvenido a nuestra guía de lenguaje de señas peruano</p>
      </header>
      <section className="home-content">
        <div className="home-card">
          <h2>¿Qué es el lenguaje de señas?</h2>
          <p>
            El lenguaje de señas es una forma de comunicación que utiliza
            movimientos de las manos, gestos y expresiones faciales para
            transmitir mensajes.
          </p>
        </div>
        <div className="home-card">
          <h2>Aprende los fundamentos</h2>
          <p>
            Explora nuestra guía para aprender los conceptos básicos y empezar a
            comunicarte usando el lenguaje de señas.
          </p>
        </div>
        <div className="home-card">
          <h2>Recursos adicionales</h2>
          <p>
            Accede a videos, tutoriales y más recursos para mejorar tus
            habilidades en el lenguaje de señas.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
