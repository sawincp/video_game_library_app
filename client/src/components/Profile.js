import React from 'react'
import { useRecoilState } from 'recoil';
import { userState } from '../state/atoms/UserState';
import axios from 'axios';

import { Container, Row, Col } from 'react-bootstrap'

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

  return(
    <Container>
        <h1>My Profile</h1>
        <h3>Welcome: {currentUser.username}</h3>
        <button onClick={handleLogOutClick}>Log Out</button>
        <hr></hr>
        <Row>
            <Col>My Games</Col>
            <Col>My Consoles</Col>
            <Col>My Genres</Col>
        </Row>

    </Container>
  )
}

export default Profile