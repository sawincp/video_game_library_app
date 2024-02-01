import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import NewGame from './NewGame'

const GameList = ({games, consoles, genres }) => {
 
  console.log(games)

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
      <hr></hr>
        <NewGame consoles={consoles} genres={genres}/>
        {listOfGames}

    </div>
  )
}

export default GameList