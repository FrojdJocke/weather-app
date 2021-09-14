import {
  weatherIcon,
  getDateName,
  toShortTimeString,
  getDateFromUnixTS,
} from '../../global';
import {
  ThermometerHalf,
  Umbrella,
  Wind,
  BrightnessAltHigh,
} from 'react-bootstrap-icons';
import ForecastHour from './ForecastHour';
import { useState } from 'react';

const Forecast = ({ data, hours }) => {
  const timestamp = data.dt;
  const date = getDateFromUnixTS(timestamp);
  const dateParts = date.toString().split(' ');

  const [showHours, setShowHours] = useState(false);
  const onClick = () => {
    setShowHours(!showHours);
  };
  return (
    <div>
      <div
        className='row mt-3 shadow forecast-card fs-5 cursor-pointer'
        onClick={onClick}
      >
        <div className='col-12 d-md-none d-flex justify-content-start align-items-baseline border-bottom py-2'>
          <label className='pe-2 fs-5 fw-bold'>{getDateName(date)}</label>
          <span>
            {dateParts[2]} {dateParts[1]}
          </span>
        </div>

        <div className='col-2 col-md-4 col-lg-3 d-flex justify-content-start align-items-center border-md-end'>
          <img
            src={weatherIcon(data.weather[0].icon)}
            className='weather-icon me-3'
            alt={data.weather[0].description}
          />
          <div className='d-none d-md-block'>
            <h4>{getDateName(date)}</h4>
            <span>
              {dateParts[2]} {dateParts[1]}
            </span>
          </div>
        </div>

        <div className='col-10 col-md-8 col-lg-9 d-flex justify-content-around align-items-start py-3'>
          <div className='d-flex justify-content-start align-items-start'>
            <div className='me-2 d-none d-md-block'>{<ThermometerHalf />}</div>
            <div className='d-flex flex-column'>
              <span className='fw-md-bold'>{Math.round(data.temp.max)}°</span>
              <span className=''>{Math.round(data.temp.min)}°</span>
            </div>
          </div>

          <div className='d-none d-md-flex justify-content-start align-items-start'>
            <div className='me-2'>{<Umbrella />}</div>
            <div className='d-flex flex-column'>
              <span className='fw-md-bold'>
                {parseFloat(data.rain || 0).toFixed(1)} mm
              </span>
            </div>
          </div>

          <div className='d-none d-md-flex justify-content-start align-items-start'>
            <div className='me-2'>{<Wind />}</div>
            <div className='d-flex flex-column'>
              <span className='fw-md-bold'>
                {Math.ceil(data.wind_speed)} m/s
              </span>
              <span className=''>{Math.ceil(data.wind_gust)} m/s</span>
            </div>
          </div>

          <div className='d-flex d-md-none flex-column'>
            <div className='d-flex justify-content-start align-items-start'>
              <div className='me-2'>{<Umbrella />}</div>
              <div className='d-flex flex-column'>
                <span className='fw-md-bold'>
                  {parseFloat(data.rain || 0).toFixed(1)} mm
                </span>
              </div>
            </div>
            <div className='d-flex justify-content-start align-items-start'>
              <div className='me-2'>{<Wind />}</div>
              <div className='d-flex flex-column'>
                <span className='fw-md-bold'>
                  {Math.ceil(data.wind_speed)} ({Math.ceil(data.wind_gust)}) m/s
                </span>
              </div>
            </div>
          </div>

          <div className='d-flex justify-content-start align-items-start'>
            <div className='me-2'>{<BrightnessAltHigh />}</div>
            <div className='d-flex flex-column'>
              <span className='fw-md-bold'>
                {toShortTimeString(getDateFromUnixTS(data.sunrise))}
              </span>
              <span className=''>
                {toShortTimeString(getDateFromUnixTS(data.sunset))}
              </span>
            </div>
          </div>
        </div>
      </div>
      {showHours && (
        <table className='table table-light table-striped table-responsive mt-2 shadow'>
          <thead>
            <tr>
              <th scope='col' className='text-center'>
                Time
              </th>
              <th scope='col' className='text-center'>
                Weather
              </th>
              <th scope='col' className='text-center'>
                Feels like
              </th>
              <th scope='col' className='text-center'>
                Precipiation mm
              </th>
              <th scope='col' className='text-center'>
                Humidity
              </th>
            </tr>
          </thead>
          <tbody>
            {hours.length > 0 ? (
              hours.map((hour) => <ForecastHour key={hour.dt} data={hour} />)
            ) : (
              <tr>
                <td colSpan='5' className='ps-3'>
                  No available data
                </td>
              </tr>
            )}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Forecast;
