import React from 'react';

const skills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Playwright', 'Python'];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2>Habilidades</h2>
      <div className="badges">
        {skills.map(s => <span key={s} className="badge">{s}</span>)}
      </div>
    </section>
  );
}