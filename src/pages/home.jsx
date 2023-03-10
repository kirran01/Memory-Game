import React from 'react';
import Card from '../components/card';
import { useState, useEffect } from 'react';
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
const Home = ({ cards, setCards }) => {
    const [count, setCount] = useState(0)
    const [score, setScore] = useState(0)
    const [lives, setLives] = useState(-6)
    const [rollNum, setRollNum] = useState(0)
    const [gameOver, setGameOver] = useState(false)
    const [victory, setVictory] = useState(null)
    console.log(rollNum, 'rn')
    let hpDisplay = '❤️️'.repeat((lives * -1) / 2)
    useEffect(() => {
        if (score === cards.length) {
            console.log('you win!')
            setGameOver(true)
            setVictory(true)
        }
    }, [score])

    useEffect(() => {
        if (lives === 0) {
            console.log('game over')
            setGameOver(true)
            setVictory(false)
        }
    }, [lives])

    useEffect(() => {
        console.log(count)
        if (count == 2) {
            setTimeout(() => {
                compare()
            }, 1000);
        }
    }, [count])

    function compare() {
        const flippedCards = cards.filter(card => card.isFlipped === true)
        if (flippedCards[0].name === flippedCards[1].name) {
            const updatedCards = cards.map(card => {
                if (card.id === flippedCards[0].id || card.id === flippedCards[1].id) {
                    setScore((score) => score + 1)
                    return { ...card, isFlipped: false, isMatched: true }
                } else {
                    return card
                }
            })
            setCards(updatedCards)
        } else {
            const updatedCards = cards.map(card => {
                if (card.id === flippedCards[0].id || card.id === flippedCards[1].id) {
                    setLives((lives) => lives + 1)
                    return { ...card, isFlipped: false }
                } else {
                    return card
                }
            })
            setCards(updatedCards)
        }
        setCount(0)
    }

    const startGame = () => {
        const shuffled = [...cards];
        shuffle(shuffled);
        const flipped = shuffled.map(card => {
            return { ...card, isFlipped: true, isMatched: false }
        })
        setCards(flipped)
        setCount(0)
        setScore(0)
        setLives(-6)
        setGameOver(false)
        setVictory(null)
        setTimeout(() => {
            const flippedBack = shuffled.map(card => {
                return { ...card, isFlipped: false, isMatched: false }
            })
            setCards(flippedBack)
        }, 3000);
    }
    return (
        <div className='min-h-screen flex flex-col justify-center items-center content-center bg-indigo-300 text-white'>
            <h1 className='text-center text-5xl m-5'>Memory Game</h1>
            <h4 className='text-white p-2 bg-indigo-500 rounded-md'>Score: {score / 2}</h4>
            {!gameOver && <h4 className='text-white m-5 p-2 bg-indigo-500 rounded-md'>Lives: {hpDisplay}</h4>}
            {gameOver && !victory && <h4 className='text-white m-5 p-2 bg-indigo-500 rounded-md'>Failure</h4>}
            {gameOver && victory && <h4 className='text-white m-5 p-2 bg-indigo-500 rounded-md'>Success!</h4>}
            <button onClick={startGame} className='bg-indigo-900 px-10 py-5 rounded-lg m-5'>Start</button>
            <div className='flex flex-wrap justify-center mx-10 my-10  md:m-10 lg:m-10'>
                {
                    cards.map(card => {
                        return (<>
                            <Card key={card.id} count={count} card={card} cards={cards} setCards={setCards} setCount={setCount} victory={victory} />
                        </>)
                    })
                }
            </div>

            <div className='text-center bg-indigo-300'>
                <h2 className='text-white text-2xl p-5'>Designed and Developed by Kirran Kirpalani</h2>
                <h4 className='text-white'>Made with Vite JS & Tailwind</h4>
            </div>

        </div>
    );
}

export default Home;
