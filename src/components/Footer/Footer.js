import './Footer.css';
import resume from '../../assets/documents/Resume.pdf';

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        <h3 className='footer-credit'>Made by Shaun Kiszonas 2022</h3>
        <div className='footer-links'>
          <a className='link-item' href='https://github.com/ShadoeWraith'>
            GitHub
          </a>
          <a
            className='link-item'
            href='https://www.linkedin.com/in/shaun-kiszonas-064802228/'
          >
            Linkedin
          </a>
          <a className='link-item' href={resume} target='_blank'>
            Resume
          </a>
          <a className='link-item' href='mailto:skiszonas99@gmail.com'>
            email
          </a>
        </div>
      </div>
    </footer>
  );
}
