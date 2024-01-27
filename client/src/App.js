import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil';
import { userState } from './state/atoms/UserState';

import Login from './components/Login';
import Profile from './components/Profile';

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
    <div className="App">
      {currentUser ? (
        <Profile />
      ):(<Login />)}
    </div>
  );
}

export default App;
