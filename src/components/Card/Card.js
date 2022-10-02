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
    },
    {
      title: 'Park Place',
      image: ParkPlace,
      github:
        'https://github.com/SalvadorBanuelos424/Park-Place-master-planned-community',
      deployed: 'https://park-place-association.herokuapp.com/',
    },
    {
      title: 'Counselor Reservation',
      image: CounselorReservation,
      github: 'https://github.com/uhMammoth/school-website',
      deployed: 'https://mern-school-website.herokuapp.com/',
    },
    {
      title: 'FFXIV Tranquility',
      image: tranquility,
      github: 'https://github.com/ShadoeWraith/tranquility',
      deployed: 'https://shadoewraith.github.io/tranquility/',
    },
  ];
  return (
    <div className='card-wrapper'>
      {cardData.map((data) => (
        <a className='card' href={data.deployed}>
          <div className='card-image'>
            <img className='image' src={data.image} alt={data.image} />
          </div>
          <div className='card-footer'>
            <h4>{data.title}</h4>
            <span>
              Show Project{' '}
              <a className='card-github' href={data.github}>
                <img src={github} alt={data.title} />
              </a>
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
