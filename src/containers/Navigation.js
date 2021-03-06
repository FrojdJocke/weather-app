import { useHistory } from 'react-router';

const Navigation = () => {
  const history = useHistory();
  const onClick = () => {
    history.push('/weather-app');
  };
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='container'>
        <div className='navbar-brand cursor-pointer' onClick={onClick}>
          JMHI
        </div>
        <div className='mx-auto text-muted d-none d-md-block'>
          Jockes meteorological and hydrological institute
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
