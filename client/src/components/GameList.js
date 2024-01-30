import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import NewGame from './NewGame'

const GameList = ({games, consoles, genres }) => {
 
  const [newGameForm, setNewGameForm]= useState(false)

  if (!games) {
    return <div>Loading...</div>;
  }

  function handleNewGameForm(){
    setNewGameForm(!newGameForm)
  }

  const listOfGames = games.map((game) => {
    return (
      <div key={game.id}>
        <Link to={`/games/${game.id}`}>{game.title}</Link>
      </div>
    );
  });

  return (
    <div>
      <h1>Game Library</h1>
      <button onClick={handleNewGameForm}>Add New Game!</button>
      <hr></hr>
      {newGameForm ? (
        <NewGame consoles={consoles} genres={genres}/>
      ): null}
      {listOfGames}
    </div>
  )
}

export default GameList