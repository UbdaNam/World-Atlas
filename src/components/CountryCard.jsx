import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import '../stylesheets/countryCard.css';

const CountryCard = ({ country }) => {
  const navigate = useNavigate();

  const handleClick = (countryName) => {
    navigate('/countries/' + countryName);
  };
  return (
    <li className='list-item'>
      <div className='card-title'>
        <div className='flag'>
          <img src={country.flags.svg} alt={`${country.name} flag`} />
        </div>
        <h2>{country.name}</h2>
      </div>
      <div className='card-body'>
        <div>
          <h3>Region: {country.region}</h3>
          <p>
            Area: {country?.area?.toLocaleString()} Km<sup>2</sup>
          </p>
        </div>
        <button onClick={() => handleClick(country.name)} className='more-btn'>
          <span>Details</span>
          <FaArrowRight />
        </button>
      </div>
    </li>
  );
};

export default CountryCard;
