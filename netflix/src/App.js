
import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Login from './pages/Login.js'
import Movies from './pages/Movies.js'
import Netflix from './pages/Netflix.js'
import Player from './pages/Player.js'
import Signup from './pages/Signup.js'
import TVShows from './pages/TVShows'
import UserLiked from './pages/UserLiked.js'

export default function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>

          <Route exact path="/login" element = {<Login/>} />
          <Route exact path="/signup" element = {<Signup/>} />
          <Route exact path="/player" element = {<Player/>} />
          <Route exact path="/movies" element = {<Movies/>} />
          <Route exact path="/tv" element = {<TVShows/>} />
          <Route exact path="/mylist" element = {<UserLiked/>} />
          <Route exact path="/" element = {<Netflix/>} />


        </Routes>
        </BrowserRouter>
      
    </div>
  )
}

