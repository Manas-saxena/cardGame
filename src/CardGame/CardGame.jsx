import React, { useState } from 'react'
import styles from "./CardGame.module.css"
import Card from '../Card/Card'
let DECK = [
    {
        number:'2',
        logo:'❤️'
    },
    {
        number:'3',
        logo:'❤️'
    },
    {
        number:'4',
        logo:'❤️'
    },
    {
        number:'5',
        logo:'❤️'
    },
    {
        number:'6',
        logo:'❤️'
    },
    {
        number:'7',
        logo:'❤️'
    },
    {
        number:'8',
        logo:'❤️'
    },
    {
        number:'9',
        logo:'❤️'
    },
    {
        number:'10',
        logo:'❤️'
    },
    {
        number:'K',
        logo:'❤️'
    },
    {
        number:'Q',
        logo:'❤️'
    },
    {
        number:'J',
        logo:'❤️'
    },
    {
        number:'A',
        logo:'❤️'
    },
    {
        number:'2',
        logo:'♠️'
    },
    {
        number:'3',
        logo:'♠️'
    },
    {
        number:'4',
        logo:'♠️'
    },
    {
        number:'5',
        logo:'♠️'
    },
    {
        number:'6',
        logo:'♠️'
    },
    {
        number:'7',
        logo:'♠️'
    },
    {
        number:'8',
        logo:'♠️'
    },
    {
        number:'9',
        logo:'♠️'
    },
    {
        number:'10',
        logo:'♠️'
    },
    {
        number:'K',
        logo:'♠️'
    },
    {
        number:'Q',
        logo:'♠️'
    },
    {
        number:'J',
        logo:'♠️'
    },
    {
        number:'A',
        logo:'♠️'
    },
    {
        number:'2',
        logo:'♣️'
    },
    {
        number:'3',
        logo:'♣️'
    },
    {
        number:'4',
        logo:'♣️'
    },
    {
        number:'5',
        logo:'♣️'
    },
    {
        number:'6',
        logo:'♣️'
    },
    {
        number:'7',
        logo:'♣️'
    },
    {
        number:'8',
        logo:'♣️'
    },
    {
        number:'9',
        logo:'♣️'
    },
    {
        number:'10',
        logo:'♣️'
    },
    {
        number:'K',
        logo:'♣️'
    },
    {
        number:'Q',
        logo:'♣️'
    },
    {
        number:'J',
        logo:'♣️'
    },
    {
        number:'A',
        logo:'♣️'
    },
    {
        number:'2',
        logo:'♦️'
    },
    {
        number:'3',
        logo:'♦️'
    },
    {
        number:'4',
        logo:'♦️'
    },
    {
        number:'5',
        logo:'♦️'
    },
    {
        number:'6',
        logo:'♦️'
    },
    {
        number:'7',
        logo:'♦️'
    },
    {
        number:'8',
        logo:'♦️'
    },
    {
        number:'9',
        logo:'♦️'
    },
    {
        number:'10',
        logo:'♦️'
    },
    {
        number:'K',
        logo:'♦️'
    },
    {
        number:'Q',
        logo:'♦️'
    },
    {
        number:'J',
        logo:'♦️'
    },
    {
        number:'A',
        logo:'♦️'
    }
]

const CardGame = () => {
    const [cards , setCards] = useState([])

    const drawRandomCards = ()=>{

        if(DECK.length===0) return alert("Deck is empty")
        const numCardToRemove = Math.min(5,DECK.length);
        let removedCards = [];
        for(let i=0 ; i<numCardToRemove;i++){
            const [randomCard] =DECK.splice( Math.floor(Math.random()*DECK.length),1);
           removedCards.push(randomCard);
        }
        setCards((prev)=>[...removedCards,...prev])
    }

  return (
    <div className={styles.game__wrapper}>
        <section className={`${styles.section} ${styles.upper__section}`}>
            <div onClick={drawRandomCards} className={`${styles.draw__card} card`}><span>Draw Card</span></div>
        </section>
        <section className={`${styles.section} ${styles.lower__section}`}>
            {
                cards.map((card,i)=><Card key={i} number={card.number} logo={card.logo}/>)
            }
        </section>
    </div>
  )
}

export default CardGame;