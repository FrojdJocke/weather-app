import { useContext } from 'react';
import WeatherContext from '../context/weatherContext';

const Header = () => {
  const { weather, setWeather } = useContext(WeatherContext);
  const onKeyPress = (e) => {
    if (e.charCode === 13) {
      e.target.blur();
      setWeather({ city: e.target.value });
    }
  };
  return (
    <div className='row py-3'>
      <div className='col-12 col-md-6'>
        <h2 className='text-capitalize'>{weather.city}</h2>
      </div>
      <div className='col-12 col-md-6 d-md-flex justify-content-md-end'>
        <input
          className='form-control'
          placeholder='Search'
          onKeyPress={onKeyPress}
        ></input>
      </div>
    </div>
  );
};

export default Header;
