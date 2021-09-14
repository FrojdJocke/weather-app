import { useContext } from 'react';
import WeatherContext from '../../context/weatherContext';
import Forecast from './Forecast';
import { getDateFromUnixTS } from '../../global';
import { useHistory } from 'react-router';

const ForecastContainer = ({ showWeek }) => {
  const { weather } = useContext(WeatherContext);
  const history = useHistory();
  const showForecast = () => {
    history.push('/forecast');
  };
  return (
    <div>
      {weather.daily ? (
        <div>
          <div className='row d-none d-md-flex'>
            <div className='col-md-3'></div>
            <div className='col-md-9 d-flex justify-content-around align-items-start'>
              <span>Temperature</span>
              <span>Precipitation per day</span>
              <span>Wind / gust</span>
              <span>Sunrise / sunset</span>
            </div>
          </div>
          {weather.daily.slice(0, showWeek ? 7 : 3).map((day) => (
            <Forecast
              key={day.dt}
              data={day}
              hours={weather.hourly.filter(
                (x) =>
                  getDateFromUnixTS(x.dt).getDate() ===
                  getDateFromUnixTS(day.dt).getDate()
              )}
            />
          ))}
        </div>
      ) : (
        <div>Nothing to display</div>
      )}
      <div className='pt-3'>
        <p className='link-primary cursor-pointer' onClick={showForecast}>
          {!showWeek && 'Show 7 day forecast'}
        </p>
      </div>
    </div>
  );
};

export default ForecastContainer;
