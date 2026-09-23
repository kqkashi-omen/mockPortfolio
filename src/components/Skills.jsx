import React from 'react';

export default function Skills() {
  const capabilities = [
    {
      title: 'Frontend & UI',
      items: ['React / Next.js', 'Framer Motion', 'Modern CSS / Canvas', 'Accessibility / a11y'],
    },
    {
      title: 'Engineering',
      items: ['TypeScript', 'State Machines', 'REST & GraphQL APIs', 'Performance Tuning'],
    },
    {
      title: 'Tooling & Craft',
      items: ['Vite / Webpack', 'Node.js runtime', 'Design Systems', 'Git CI/CD Workflows'],
    },
  ];

  return (
    <section id="skills" className="section-container">
      <div className="section-tag">[03] Capabilities</div>
      <div className="skills-grid">
        {capabilities.map((group) => (
          <div key={group.title} className="skill-category">
            <h3>{group.title}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}