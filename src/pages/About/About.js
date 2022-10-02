import './About.css';
import selfie from '../../assets/selfie.jpg';

export default function About() {
  return (
    <section className='about-section' id='about'>
      <div className='section-header'>
        <h2 className='about-header'>About Me</h2>
      </div>
      <div className='about-content'>
        <div>
          <p>
            Front end web developer learning new technologies to better improve
            my ability to create well maintainable web apps. I think creatively
            and logically when creating web apps to best suit the overall user
            experience.
          </p>
          <h4>Skills:</h4>
          <h5>
            HTML, CSS, JavaScript, JQuery, React.js, Bootstrap, TailWindCSS,
            Node.js
          </h5>
        </div>
        <img className='about-image' src={selfie} alt='selfie' />
      </div>
    </section>
  );
}
