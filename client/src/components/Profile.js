import React,{ useState } from 'react'
import { useRecoilState } from 'recoil';
import { userState } from '../state/atoms/UserState';
import axios from 'axios';

import { Container, Row, Col } from 'react-bootstrap'

function Profile() {
    const [currentUser, setCurrentUser]= useRecoilState(userState)
    
    // console.log("Current User:", currentUser)

    const numGames = currentUser.games.length
    const numConsoles= currentUser.consoles.length
    const numGenres = currentUser.genres.length

    async function handleLogOutClick(){
        try{
            await axios.delete('/logout')
            setCurrentUser(null)
        } catch(error){
            console.error("logout error:", error)
        }
    }

  return(
    <Container>
        <h1>My Profile</h1>
        <h3>Welcome: {currentUser.username}</h3>
        <button onClick={handleLogOutClick}>Log Out</button>
        <hr></hr>
        <Row>
            <Col>My Games: {numGames}</Col>
        </Row>  
        <Row>
            <Col>
            {currentUser.games.map((game)=>(
                <li key={game.id}>{game.title}</li>
            ))}
            </Col>
        </Row>
        

    </Container>
  )
}

export default Profile