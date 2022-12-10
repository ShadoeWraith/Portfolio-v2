import './Home.css';
import arrow from '../../assets/Arrow.jpg';

import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <div className='home-wrapper' id='home'>
      <div className='ball'></div>
      <div className='home-content-wrapper'>
        <TypeAnimation
          className='home-header'
          sequence={[500, 'Shaun Kiszonas']}
          wrapper='h1'
          cursor={false}
          speed={15}
        ></TypeAnimation>
        <TypeAnimation
          className='home-title'
          sequence={[2000, '// Fullstack Web Developer']}
          wrapper='h2'
          cursor={false}
          speed={25}
        />
      </div>
      <a href='#about'>
        <img className='arrow' src={arrow} alt='arrow' />
      </a>
    </div>
  );
}
