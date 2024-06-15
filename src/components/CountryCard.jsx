import { Link } from 'react-router-dom';
import '../stylesheets/countryCard.css';

const CountryCard = ({ country }) => {
  return (
    <Link to={`countries/${country.name}`}>
      <li className='list-item'>
        <div className='card-title'>
          <div className='flag'>
            <img src={country.flags.svg} alt={`${country.name} flag`} />
          </div>
          <h2>{country.name}</h2>
        </div>
        <div className='card-body'>
          <h3>Region: {country.region}</h3>
          <p>
            Area: {country?.area?.toLocaleString()} Km<sup>2</sup>
          </p>
        </div>
      </li>
    </Link>
  );
};

export default CountryCard;
