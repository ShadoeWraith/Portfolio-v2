import ParkPlace from '../../assets/ParkPlace.jpg';
import CounselorReservation from '../../assets/CounselorReservation.jpg';
import tranquility from '../../assets/tranquility.jpg';
import landingpage from '../../assets/Landing-Page.jpg';
import portfolioV1 from '../../assets/Portfolio_v1.jpg';
import weatherApp from '../../assets/WeatherDashboard.JPG';

import './Card.css';

export default function Card() {
  const cardData = [
    {
      title: 'FFXIV Tranquility',
      image: tranquility,
      github: 'https://github.com/ShadoeWraith/tranquility',
      deployed: 'https://shadoewraith.github.io/tranquility/',
      technology: ['HTML,', ' CSS,', ' JavaScript,', ' React.js,', ' REST API'],
    },
    {
      title: 'Simple Weather App',
      image: weatherApp,
      github: 'https://github.com/ShadoeWraith/Weather-Dashboard',
      deployed: 'https://shadoewraith.github.io/Weather-Dashboard/',
      technology: ['HTML,', ' CSS,', ' JavaScript,', ' REST API'],
    },
    {
      title: 'Landing Page',
      image: landingpage,
      github: 'https://github.com/ShadoeWraith/landing-page',
      deployed: 'https://shadoewraith.github.io/landing-page/',
      technology: ['HTML,', ' CSS,', ' Bootstrap'],
    },
    {
      title: 'Portfolio v1',
      image: portfolioV1,
      github: 'https://github.com/ShadoeWraith/Portfolio',
      deployed: 'https://shadoewraith.github.io/Portfolio/',
      technology: ['HTML,', ' CSS,', ' JavaScript,', ' React.js'],
    },
    {
      title: 'Counselor Reservation',
      image: CounselorReservation,
      github: 'https://github.com/uhMammoth/school-website',
      deployed: 'https://mern-school-website.herokuapp.com/',
      technology: [
        'HTML,',
        ' CSS,',
        ' JavaScript,',
        ' React.js,',
        ' MongoDB,',
        ' GraphQL',
      ],
    },
    {
      title: 'Park Place',
      image: ParkPlace,
      github:
        'https://github.com/SalvadorBanuelos424/Park-Place-master-planned-community',
      deployed: 'https://park-place-association.herokuapp.com/',
      technology: [
        'Handlebars,',
        ' JavaScript,',
        ' TailwindCSS,',
        ' MySQL,',
        ' Express.js',
      ],
    },
  ];
  return (
    <div className='card-wrapper'>
      {cardData.map((data) => (
        <div className='card' href={data.deployed} key={data.title}>
          <div className='card-image'>
            <img className='image' src={data.image} alt={data.image} />
          </div>
          <div className='card-footer'>
            <span className='card-tech'>{data.technology}</span>
            <h4>{data.title}</h4>
            <div className='card-links'>
              <a className='card-deploy' href={data.deployed}>
                Show Project{' '}
              </a>
              <a className='card-github' href={data.github}>
                GitHub
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
