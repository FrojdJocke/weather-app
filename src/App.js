import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ForecastContainer from './containers/forecast/ForecastContainer';
import Header from './containers/Header';
import Navigation from './containers/Navigation';
import NotFound from './containers/NotFound';
import WeatherContext from './context/weatherContext';
import useWeather from './hooks/useWeather';

function App() {
  const weather = useWeather();
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <div className='container'>
          <WeatherContext.Provider value={weather}>
            <Header />
            <Switch>
              <Route exact path='/'>
                <ForecastContainer />
              </Route>
              <Route path='/home'>
                <ForecastContainer />
              </Route>
              <Route path='/forecast'>
                <ForecastContainer showWeek={true} />
              </Route>
              <NotFound />
            </Switch>
          </WeatherContext.Provider>
        </div>
      </Router>
    </div>
  );
}

export default App;
