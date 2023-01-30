import React from 'react';
import { useState } from 'react';

const Card = ({ card, cards, setCards, setCount }) => {
    const [cardImg, setCardImg] = useState(card.imgURL)
    const [matched, setMatched] = useState(false)
    const flipCard = () => {
        const updatedCards = cards.map(oneCard => {
            if (oneCard.id === card.id) {
                return { ...oneCard, isFlipped: true }
            } else {
                return oneCard
            }
        })
        setCards(updatedCards)
        setCount((previousState) => previousState + 1)
    }
    return (
        <div onClick={() => flipCard()} className={`${card.isMatched ? 'bg-transparent border-none' : 'bg-white border-indigo-100 border-8 border-double shadow-md'} flex justify-center m-5 rounded-md w-60 cursor-pointer`}>
            <img className='h-40 m-5' src={card.isFlipped ? `../${cardImg}` : <></>} alt="" />
        </div>
    );

}

export default Card;
