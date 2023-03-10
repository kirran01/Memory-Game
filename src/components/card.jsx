import React from 'react';
import { useState } from 'react';

const Card = ({ card, cards, setCards, setCount, victory,count }) => {
    const [cardImg, setCardImg] = useState(card.imgURL)
    const flipCard = () => {
        const updatedCards = cards.map(oneCard => {
            if (oneCard.isFlipped===false&&count<2&&victory==null&&!oneCard.isMatched && oneCard.id === card.id) {
                setCount((previousState) => previousState + 1)
                return { ...oneCard, isFlipped: true }
            } else {
                return oneCard
            }
        })
        setCards(updatedCards)

    }
    return (
        <div onClick={() => flipCard()} className={`${card.isMatched || victory===false? 'bg-transparent border-none' : 'bg-white border-indigo-100 border-8 border-double shadow-md'} flex justify-center m-5 rounded-md w-20 md:w-60 lg:w-60 cursor-pointer`}>
            <img className='h-8 mx-0 my-5 md:h-40 lg:h-40 lg:m-5 md:m-5' src={card.isFlipped ? `../${cardImg}` : <> </>} alt="" />
        </div>
    );

}

export default Card;
