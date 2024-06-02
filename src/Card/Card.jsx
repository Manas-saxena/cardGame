import React,{memo} from 'react'
import styles from "./Card.module.css"

const Card = ({number,logo}) => {
  return (
    <div className={`card ${styles.display__card}`}>
        <span className={styles.number}>{number}</span>
        <span className={styles.logo}>{logo}</span>
    </div>
  )
}

export default Card