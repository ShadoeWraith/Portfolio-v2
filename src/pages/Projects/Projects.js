import './Projects.css';

import Card from '../../components/Card/Card';

export default function Projects() {
  return (
    <section className='section-wrapper' id='projects'>
      <div className='section-title'>
        <span>Check it out</span>
        <h2 className='project-section-header'>Featured Projects</h2>
      </div>
      <Card />
    </section>
  );
}
