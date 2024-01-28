import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { userState } from './state/atoms/UserState';
import {Routes, Route} from 'react-router-dom'

import Login from './components/Login';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import ConsoleList from './components/ConsoleList';
import GameList from './components/GameList';

function App() {

  const [currentUser, setCurrentUser]= useRecoilState(userState)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => setCurrentUser(currentUser));
      }
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
            <Route exact path='/games' element={<GameList />} />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
