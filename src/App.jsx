import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Card from './components/card'
import Nav from './components/nav'
import Home from './pages/home'

function App() {
  const [cards, setCards] = useState([{ id:1, name: 'ruby', isFlipped: false, imgURL: '../public/img/ruby.png' }, { id:2, name: 'ruby', isFlipped: false, imgURL: '../public/img/ruby.png' }, { id:3, name: 'ponyo', isFlipped: false, imgURL: '../public/img/ponyo.png' }, {id:4, name: 'ponyo', isFlipped: false, imgURL: '../public/img/ponyo.png' }, {id:5, name: 'mushroom', isFlipped: false, imgURL: '../public/img/mush.png' }, {id:6, name: 'mushroom', isFlipped: false, imgURL: '../public/img/mush.png' }])
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home cards={cards} setCards={setCards} />} />
      </Routes>
    </div>
  )
}

export default App
