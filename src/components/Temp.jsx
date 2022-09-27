import React from 'react'
import styles from './Temp.module.css'

//Creado con React Snipets extension poniendo rfc

export default function Temp({label, value, className}) {
  return (
    // componente Temp recibe como propiedad className y la usa aqui
    <div className={[styles.Temp, className].join(' ')}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
    </div>
  )
}
