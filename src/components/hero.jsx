import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <h1>¡Hola! Soy Enrique.</h1>
      <p>Desarrollador/a web frontend apasionado por experiencias interactivas.</p>
      <button onClick={() => document.querySelector('#projects').scrollIntoView({ behavior: 'smooth' })}>
        Ver Proyectos
      </button>
    </section>
  );
}
