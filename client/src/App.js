import React, { useEffect, useState} from 'react'
import { useRecoilState } from 'recoil';
import { userState } from './state/atoms/UserState';
import { gameListState } from './state/atoms/GameListState';
import { consoleState } from './state/atoms/ConsoleState';
import { genreState } from './state/atoms/GenreState';
import {Routes, Route} from 'react-router-dom'
import axios from 'axios';

import Login from './components/Login';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import GameList from './components/GameList';
import GameDetails from './components/GameDetails';
import ConsoleList from './components/ConsoleList';
import GenreList from './components/GenreList';
import AllConsoles from './components/AllConsoles';
import AllGenres from './components/AllGenres';

function App() {

  const [currentUser, setCurrentUser]= useRecoilState(userState)
  const [currentGameList, setCurrentGameList]= useRecoilState(gameListState)
  const [consoles, setConsoles]= useRecoilState(consoleState)
  const [genres, setGenres] = useRecoilState(genreState)

  // console.log("Current User:", currentUser)
  

  useEffect(()=>{
    axios.get('/me')
    .then(r =>{
      setCurrentUser(r.data)
    })
    .catch(error =>{
      console.error(error)
    })
  },[])

  // games
  useEffect(() => {
    axios.get('/games')
      .then(response => {
        setCurrentGameList(response.data)
        // setGames(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  // console.log(currentGameList)

  //consoles
  useEffect(()=>{
    axios.get('/consoles')
    .then(response =>{
      // console.log(response.data)
      setConsoles(response.data)
    })
    .catch(error =>{
      console.error(error)
    })
  },[])

  // genres
  useEffect(()=>{
    axios.get('/genres')
    .then(response => {
      setGenres(response.data)
    })
    .catch(error =>{
      console.error(error)
    })
  },[])

 
  // console.log("Current games:", currentGameList)

  return (
    <div>
      {currentUser ? (
        <>
          <NavBar />
          <Routes>
            <Route exact path='/' element={<Profile />} />
            <Route exact path='/games' element={<GameList />} />
            <Route exact path ='/consoles' element={<AllConsoles/>}/>
            <Route exact path ='/genres' element={<AllGenres/>} />
            <Route exact path= '/games/:id' element={<GameDetails />}/>
            <Route exact path='/consoles/:id/games' element={<ConsoleList />} />
            <Route exact path='/genres/:id/games' element= {<GenreList />}/>
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
