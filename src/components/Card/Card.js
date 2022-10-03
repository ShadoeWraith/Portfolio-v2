import AirPollution from '../../assets/AirPollution.jpg';
import ParkPlace from '../../assets/ParkPlace.jpg';
import CounselorReservation from '../../assets/CounselorReservation.jpg';
import tranquility from '../../assets/tranquility.jpg';
import github from '../../assets/github.jpg';

import './Card.css';

export default function Card() {
  const cardData = [
    {
      title: 'Air Quality',
      image: AirPollution,
      github: 'https://github.com/Callank21/group-project',
      deployed: 'https://callank21.github.io/group-project/index.html',
      technology: ['HTML,', ' JavaScript,', ' TailwindCSS,', ' REST API'],
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
      title: 'FFXIV Tranquility',
      image: tranquility,
      github: 'https://github.com/ShadoeWraith/tranquility',
      deployed: 'https://shadoewraith.github.io/tranquility/',
      technology: ['HTML,', ' CSS,', ' JavaScript,', ' React.js,', ' REST API'],
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
