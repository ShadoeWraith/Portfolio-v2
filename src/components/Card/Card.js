import virtualKeyboard from '../../assets/virtualKeyboard.JPG';
import CounselorReservation from '../../assets/CounselorReservation.jpg';
import tranquility from '../../assets/tranquility.jpg';
import landingpage from '../../assets/Landing-Page.jpg';
import portfolioV1 from '../../assets/Portfolio_v1.jpg';
import weatherApp from '../../assets/WeatherDashboard.JPG';
import AirPollution from '../../assets/AirPollution.jpg';
import ParkPlace from '../../assets/ParkPlace.jpg';

import './Card.css';
import { useState } from 'react';

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
      title: 'Virtual Keyboard (Desktop Only)',
      image: virtualKeyboard,
      github: 'https://github.com/ShadoeWraith/Virtual-Keyboard',
      deployed: 'https://shadoewraith.github.io/Virtual-Keyboard/',
      technology: ['HTML,', ' CSS,', ' JavaScript'],
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
  ];

  const secondaryCardData = [
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
        'HTML,',
        ' TailWindCSS,',
        ' JavaScript,',
        ' Handlebars,',
        ' MySQL',
      ],
    },
    {
      title: 'Air Pollution',
      image: AirPollution,
      github: 'https://github.com/Callank21/group-project',
      deployed: 'https://callank21.github.io/group-project/index.html',
      technology: ['HTML,', ' TailWindCSS,', ' JavaScript, ', ' REST API'],
    },
  ];

  const [viewMore, setViewMore] = useState(false);

  return (
    <div>
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
      {!viewMore ? (
        <div className='button-wrapper'>
          <button className='viewBtn' onClick={() => setViewMore(true)}>
            Expand Projects
          </button>
        </div>
      ) : (
        <div>
          <div className='card-wrapper'>
            {secondaryCardData.map((data) => (
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
          <div className='button-wrapper'>
            <button className='viewBtn' onClick={() => setViewMore(false)}>
              Collapse Projects
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
