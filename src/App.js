import React from 'react';
import Card from './components/Card.jsx';
import Cards from './components/Cards.jsx';
import SearchBar from './components/SearchBar.jsx';

import styles from './App.module.css';


// si quiero que esto este guardado en una variable de entorno p/no compartir clave
const apiKey = process.env.REACT_APP_APIKEY;


function App() {
  // devuelve un estado que viene como un array, el estado primero y la funcion que la seteea segundo. Arranca como array vacio
  const [cities, setCities] = React.useState([]);

  function onSearch(ciudad) {
    // recibe ciudad, metodo fetch sirve para solicitar info desde backend, devuelve una promesa
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if (recurso.main !== undefined) {
          // vamos construyendo con los datos de la ciudad solicitada al backend
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };

          // si la existe la ciudad no quiero agregarla
          const exist = cities.find(c => c.id === ciudad.id)

          if (!exist) {
            // setea un estado, funcion que le pasas el estado previo, retorna concatenando con ciudad 
            setCities(oldCities => [...oldCities, ciudad]);
          }
        }
        else {
          alert("Ciudad no encontrada");
        }
      }
      );
  }

  // filtra los que no tengan ids iguales al que se pasan, devuelve un array con esos elementos
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (
    <div className={styles.App}>
      <header className={styles.Header}>
        <SearchBar
          onSearch={(ciudad) => onSearch(ciudad)}
        />
      </header>
      <main className={styles.Main}>
        <section className={styles.MainCity}>
          {/* si quisiera poner que figure la ultima ciudad al lado izquierdo */}
          {cities.length ? (
            <Card
              max={cities[cities.length - 1].max}
              min={cities[cities.length - 1].min}
              name={cities[cities.length - 1].name}
              img={cities[cities.length - 1].img}

              // le digo a esta que es la Card ppal p/q' me pase otro estilo
              main={true}
            />) : (<span>No hay ciudades</span>)}
        </section>
        <section className={styles.ReelCities}>
          {/* pasa como props a Cards las ciudades en data.js  */}
          <Cards cities={cities} onClose={onClose} />
        </section>
      </main>
    </div>
  );
}

export default App;
