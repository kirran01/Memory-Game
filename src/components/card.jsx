import React from 'react';
import { useState } from 'react';

const Card = ({ card, cards, setCards, setCount, victory,count }) => {
    const [cardImg, setCardImg] = useState(card.imgURL)
    const [matched, setMatched] = useState(false)
    const flipCard = () => {
        const updatedCards = cards.map(oneCard => {
            if (count<2&&victory==null&&!oneCard.isMatched && oneCard.id === card.id) {
                return { ...oneCard, isFlipped: true }
            } else {
                return oneCard
            }
        })
        setCards(updatedCards)
        setCount((previousState) => previousState + 1)
    }
    return (
        <div onClick={() => flipCard()} className={`${card.isMatched || victory===false? 'bg-transparent border-none' : 'bg-white border-indigo-100 border-8 border-double shadow-md'} flex justify-center m-5 rounded-md w-32 md:w-60 lg:w-60 cursor-pointer`}>
            <img className='h-8 md:h-40 lg:h-40 m-5' src={card.isFlipped ? `../${cardImg}` : <></>} alt="" />
        </div>
    );

}

export default Card;
