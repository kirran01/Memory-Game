import React from 'react';
import Card from '../components/card';
import { useState, useEffect } from 'react';


const Home = ({ cards, setCards }) => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(count)
        if (count == 2) {
            compare()
        }
    }, [count])
    function compare() {
        const flippedCards = cards.filter(card => card.isFlipped === true)
        if (flippedCards[0].name === flippedCards[1].name) {
            const updatedCards = cards.map(card => {
                if (card.id === flippedCards[0].id || card.id === flippedCards[1].id) {
                    return { ...card, isFlipped: false, isMatched: true }
                } else {
                    return card
                }
            })
            setCards(updatedCards)
        } else {
            const updatedCards = cards.map(card => {
                if (card.id === flippedCards[0].id || card.id === flippedCards[1].id) {
                    return { ...card, isFlipped: false }
                } else {
                    return card
                }
            })
            setCards(updatedCards)
        }
        setCount(0)
    }
    const flipCards = () => {
        console.log('flip')
        const flipped = cards.map(card => {
            return { ...card, isFlipped: true }
        })
        setCards(flipped)
        setTimeout(() => {
            const flippedBack = cards.map(card => {
                return { ...card, isFlipped: false }
            })
            setCards(flippedBack)
        }, 3000);
    }

    return (
        <div className='flex flex-col justify-center items-center content-center bg-indigo-300 text-white'>
            <h1 className='text-center text-5xl m-5'>Memory Game</h1>
            <button onClick={flipCards} className='bg-indigo-900 px-10 py-5 rounded-lg m-5'>Start</button>
            <div className='flex flex-wrap justify-center'>
                {
                    cards.map(card => {
                        return (<>
                            <Card key={card.id} card={card} cards={cards} setCards={setCards} setCount={setCount} />
                        </>)
                    })
                }
            </div>

        </div>
    );
}

export default Home;
