import React, {useState} from 'react';
import DateBuilder from './components/DateBuilder';

const api = {
  key: 'ca419d860870597f10881db6e7521d4c',
  base: 'http://api.openweathermap.org/data/2.5/'
}
function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  const search = evt => {
    if (evt.key === 'Enter') {
        fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result)
        }).catch(err => {
            console.log('Error Reading data: ' + err);
        });
    }
  }

  return (
    <div className='App'>
     <main>
       <div className='search-box'>
        <input type="text" 
        className='search-bar' 
        placeholder='Search...'
        onChange={e => setQuery(e.target.value)}
        value={query}
        onKeyPress={search}/>
        </div>
        {(typeof weather.main != 'undefined') ? (
          <div>
            <div className='location-box'>
              <div className='location'>{weather.name},{weather.sys.country}</div>
              <div className='date'><DateBuilder /></div>
            </div>
            <div className='weather-box'>
              <div className='temp'>
                {Math.round(weather.main.temp)}ºc
              </div>
              <div className='weather'>
                {weather.weather[0].description}
              </div>
            </div>
          </div>
        ) : ('')}
     </main>
    </div>
  );
}

export default App;
