import React from 'react';
import Temp from './Temp.jsx';
import styles from './Card.module.css'

// agrego main como parametro que se le pasa a la funcion
export default function Card({max, min , name, img, onClose, main}) { 
  // acá va tu código
  return (
    // si la Card es main (ppal.) aplico MainCard, sino vacio, uno el resultado con join
   <div className={[styles.Card, main ? styles.MainCard : ''].join(' ')}>
    <span className={styles.Name}>{name}</span>
    <button onClick={onClose} className={styles.Button}>x</button>
    <section>
      <Temp className={styles.Temp} label="Min" value={min} />
      <Temp className={styles.Temp} label="Max" value={max} />
      {/* si es main aplico tamaño 4, sino 2 */}
      <img src={`http://openweathermap.org/img/wn/${img}@${main ? 4 : 2 }x.png`} alt="icono" />
    </section>
  </div>
  );
};