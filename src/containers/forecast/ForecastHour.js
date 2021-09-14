import { weatherIcon, getDateFromUnixTS } from '../../global';

const ForecastHour = ({ data }) => {
  return (
    <tr>
      <td className='text-center'>{getDateFromUnixTS(data.dt).getHours()}</td>
      <td className='align-items-center text-center'>
        <div className='d-flex align-items-center justify-content-center'>
          <img
            className='table-weather-icon'
            src={weatherIcon(data.weather[0].icon)}
            alt={data.weather[0].description}
          />{' '}
          {Math.round(data.temp)}°
        </div>
      </td>
      <td className='text-center'>{Math.round(data.feels_like)}°</td>
      <td className='text-center'>
        {parseFloat(data.rain ? data.rain['1h'] : 0).toFixed(1)}
      </td>
      <td className='text-center'>{data.humidity}</td>
    </tr>
  );
};

export default ForecastHour;
