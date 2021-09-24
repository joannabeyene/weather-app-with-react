import React, {useState} from 'react';
const api = {
  key: "ca419d860870597f10881db6e7521d4c",
  base: "api.openweathermap.org/data/2.5/"
}
function App() {

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  const search = evt => {
    if (evt.key === 'Enter') {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(res=> res.json())
      .then(result => {
        setWeather(result);
        setQuery('');
        console.log(result)
        });
    }
  }

  const dateBuilder = () => {
    let today = new Date().toDateString();
    return `${today}`
  }

  return (
    <div className="App">
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
              <div className='location'>{weather.name}, {weather.sys.country}</div>
              <div className='date'>{dateBuilder(new Date())}</div>
            </div>
            <div className='weather-box'>
              <div className='temp'>
                {Math.round(weather.main.temp)}ºc
              </div>
              <div className='weather'>{weather.weather[0].main}</div>
            </div>
          </div>
        ) : ('')}
     </main>
    </div>
  );
}

export default App;