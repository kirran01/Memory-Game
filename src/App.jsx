import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Card from './components/card'
import Nav from './components/nav'
import Foot from './components/foot'
import Home from './pages/home'

function App() {
  const [cards, setCards] = useState([{ id: 1, name: 'ruby', isFlipped: false, isMatched:false, imgURL: '../public/img/ruby.png' }, { id: 2, name: 'ruby', isFlipped: false, isMatched:false, imgURL: '../public/img/ruby.png' }, { id: 3, name: 'ponyo', isFlipped: false, isMatched:false, imgURL: '../public/img/ponyo.png' }, { id: 4, name: 'ponyo', isFlipped: false, isMatched:false, imgURL: '../public/img/ponyo.png' }, { id: 5, name: 'mushroom', isFlipped: false, isMatched:false, imgURL: '../public/img/mush.png' }, { id: 6, name: 'mushroom', isFlipped: false, isMatched:false, imgURL: '../public/img/mush.png' },{ id: 7, name: 'poro', isFlipped: false, isMatched:false, imgURL: '../public/img/poro.png' },{ id: 8, name: 'poro', isFlipped: false, isMatched:false, imgURL: '../public/img/poro.png' }])
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
