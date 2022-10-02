import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='nav'>
      <ul className='nav-categories'>
        <li>
          <a className='nav-item' href='#home'>
            home
          </a>
        </li>
        <li>
          <a className='nav-item' href='#about'>
            about
          </a>
        </li>
        <li>
          <a className='nav-item' href='#projects'>
            projects
          </a>
        </li>
      </ul>
    </nav>
  );
}
