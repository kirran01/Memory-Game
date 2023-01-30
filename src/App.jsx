import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Card from './components/card'
import Nav from './components/nav'
import Foot from './components/foot'
import Home from './pages/home'
import rubyIcon from '../public/img/ruby.png'
import ponyoIcon from '../public/img/ponyo.png'
import mushIcon from '../public/img/mush.png'
import poroIcon from '../public/img/poro.png'

function App() {

  const [cards, setCards] = useState([
    { id: 1, name: 'ruby', isFlipped: false, isMatched: false, imgURL: rubyIcon },
    { id: 2, name: 'ruby', isFlipped: false, isMatched: false, imgURL: rubyIcon },
    { id: 3, name: 'ponyo', isFlipped: false, isMatched: false, imgURL: ponyoIcon },
    { id: 4, name: 'ponyo', isFlipped: false, isMatched: false, imgURL: ponyoIcon },
    { id: 5, name: 'mushroom', isFlipped: false, isMatched: false, imgURL: mushIcon },
    { id: 6, name: 'mushroom', isFlipped: false, isMatched: false, imgURL: mushIcon },
    { id: 7, name: 'poro', isFlipped: false, isMatched: false, imgURL: poroIcon },
    { id: 8, name: 'poro', isFlipped: false, isMatched: false, imgURL: poroIcon }])

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home cards={cards} setCards={setCards} />} />
      </Routes>
      <Foot />
    </div>
  )
}

export default App
