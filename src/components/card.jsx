import React from 'react';
import { useState } from 'react';

const Card = ({ card, cards, setCards }) => {
    const [cardImg, setCardImg] = useState(card.imgURL)
    return (
        <div className='flex justify-center border-8 border-double shadow-md m-5 bg-white border-indigo-100 rounded-md w-60 cursor-pointer'>
            <img className='h-40 m-5' src={card.isFlipped ? `../${cardImg}` : <></>} alt="" />
        </div>
    );
}

export default Card;
