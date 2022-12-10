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
            Fullstack web developer learning new technologies to better improve
            my ability to create well maintainable web apps. I think creatively
            and logically when creating web apps to best suit the overall user
            experience.
          </p>

          <h3>Skills</h3>
          <div className='skills'>
            <div className='front-end'>
              <h4>Front-End</h4>
              <ul>
                <li>
                  HTML, CSS, JavaScript, JQuery, React.js, Bootstrap,
                  TailWindCSS
                </li>
              </ul>
            </div>
            <div className='back-end'>
              <h4>Back-End</h4>
              <ul>
                <li>Node.js, Firebase, MySQL, MongoDB, GraphQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
