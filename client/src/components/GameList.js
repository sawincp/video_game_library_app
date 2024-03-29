import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';
import { gameListState } from '../state/atoms/GameListState';
import { genreState } from '../state/atoms/GenreState';
import { consoleState } from '../state/atoms/ConsoleState';
import { Link } from 'react-router-dom';
import NewGame from './NewGame'

import { Container, Row, Col } from 'react-bootstrap'

const GameList = () => {

  const games = useRecoilValue(gameListState)
  const genres = useRecoilValue(genreState)
  const consoles = useRecoilValue(consoleState)

  console.log(consoles)

  const [newGameForm, setNewGameForm]= useState(false)
 
  if(!games){
    return<p>Loading....</p>
  }

  const handleNewGameForm = ()=>{
    setNewGameForm(!newGameForm)
}  

return (
  <Container>
    <h1>Game Library</h1>
    <button onClick={handleNewGameForm}>Add Game!</button>
    <hr />

    {newGameForm ? (
      <NewGame consoles={consoles} genres={genres} />
    ) : null}
    <hr></hr>

    <Row className="game-list"> 
      {games.map((game) => (
        <Col key={game.id}>
          
          <Link to={`/games/${game.id}`} className="game-title">
            {game.title}
          </Link>
          <hr></hr>
          <img src={game.cover_art} alt='cover_art'/>
        </Col>
      ))}
    </Row>
  </Container>
);
}

export default GameList