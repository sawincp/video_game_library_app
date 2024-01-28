import React from 'react'
import { useRecoilState } from 'recoil';
import { userState } from '../state/atoms/UserState';
import axios from 'axios';

function Profile() {
    const [currentUser, setCurrentUser]= useRecoilState(userState)

    // console.log(currentUser)

    async function handleLogOutClick(){
        try{
            await axios.delete('/logout')
            setCurrentUser(null)
        } catch(error){
            console.error("logout error:", error)
        }
    }

  return (
    <div>
        <h1>My Profile</h1>
        <hr></hr>
        <h2>Welcome: {currentUser.username}</h2>
        <button onClick={handleLogOutClick}>Log Out</button>
        <h3>My Games</h3>
        <h3>My Consoles</h3>
        <h3>My Genres</h3>
    </div>
  )
}

export default Profile