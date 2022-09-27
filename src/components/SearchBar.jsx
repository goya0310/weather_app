// import React from 'react';
// import styles from './SearchBar.module.css'

// export default function SearchBar(props) {
//   // acá va tu código
//   // inserta un formulario
//   return <form>
//     <input placeholder="Ciudad..." />
//     <input type="submit" value="Agregar" />
//   </form>
// };

import React from 'react';
// traemos los iconos, la carpeta son las primeras 2 letras
// para instalar npm i react-icons
import {BiSearchAlt, BiMapPin} from 'react-icons/bi'
import styles from './SearchBar.module.css';

export default function SearchBar({ onSearch }) {
  return (
    //  traigo de modulo SearchBar, y en submit quiero que se utilice on Search 
    <form className={styles.searchBar} onSubmit ={(e)=>{
      e.preventDefault();

      const input = document.getElementById('cityInput');
      // para pasar el valur que se cargo en el navbar
      onSearch(input.value);
      input.value ='';
    }}>
        <BiMapPin className={styles.icon}/>
        <input id='cityInput' className={styles.input} placeholder='Ciudad...' />
        <button className={styles.submit} type='submit'>
          <BiSearchAlt />
        </button>
    </form>        
    )
}