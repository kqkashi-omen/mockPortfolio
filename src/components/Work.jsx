import React from 'react';

const projects = [
  {
    id: '01',
    title: 'CivicSetu',
    desc: 'Public utility analytics platform with real-time streaming dashboards.',
    tag: 'React / Architecture',
    link: '#',
  },
  {
    id: '02',
    title: 'Klarity OS',
    desc: 'Minimalist note and knowledge workspace focused on speed and local-first data.',
    tag: 'Web Platform / TypeScript',
    link: '#',
  },
  {
    id: '03',
    title: 'Aura Metrics',
    desc: 'Lightweight performance observability tool for edge computing frameworks.',
    tag: 'Design System / Frontend',
    link: '#',
  },
];

export default function Work() {
  return (
    <section id="work" className="section-container">
      <div className="section-tag">[02] Selected Projects</div>
      <div className="project-list">
        {projects.map((project) => (
          <a
            key={project.id}
            href={project.link}
            className="project-row"
            target="_blank"
            rel="noreferrer"
          >
            <div className="project-left">
              <span className="project-index">{project.id}</span>
              <h2 className="project-name">{project.title}</h2>
            </div>
            <div className="project-right">
              <p className="project-desc">{project.desc}</p>
              <span className="project-tag">{project.tag}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}