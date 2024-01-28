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
        <p>Welcome: {currentUser.username}</p>
        <button onClick={handleLogOutClick}>Log Out</button>
    </div>
  )
}

export default Profile