import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { userState } from './state/atoms/UserState';
import { gameListState } from './state/atoms/GameListState';
import {Routes, Route} from 'react-router-dom'
import axios from 'axios';

import Login from './components/Login';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import ConsoleList from './components/ConsoleList';
import GameList from './components/GameList';

function App() {

  const [currentUser, setCurrentUser]= useRecoilState(userState)
  const [currentGameList, setCurrentGameList]= useRecoilState(gameListState)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => setCurrentUser(currentUser));
      }
    });
  }, []);

  useEffect(() => {
    axios.get('/games')
      .then(response => {
        setCurrentGameList(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      {currentUser ? (
        <>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Profile />} />
            <Route exact path="/consoles" element={<ConsoleList />} />
            <Route exact path='/games' element={<GameList currentGameList={currentGameList} />} />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
