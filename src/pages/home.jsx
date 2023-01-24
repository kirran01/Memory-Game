import React from 'react';
import Card from '../components/card';
import { useState } from 'react';


const Home = ({ cards, setCards }) => {
    return (
        <div className='flex flex-col justify-center items-center content-center bg-indigo-300 text-white'>
            <h1 className='text-center text-xl'>Memory Game</h1>
            <button className='bg-indigo-900 px-10 py-5 rounded-lg m-5'>Start</button>
            <div className='flex flex-wrap justify-center'>
                {
                    cards.map(card => {
                        return (<>
                            <Card key={card.id} card={card} cards={cards} setCards={setCards} />
                        </>)
                    })
                }
            </div>

        </div>
    );
}

export default Home;
