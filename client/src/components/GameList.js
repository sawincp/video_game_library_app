import React, { useState } from 'react'
import { useRecoilValue } from 'recoil';
import { gameListState } from '../state/atoms/GameListState';
import { Link } from 'react-router-dom';
import NewGame from './NewGame'

const GameList = ({ consoles, genres }) => {

  const games = useRecoilValue(gameListState)

  const [newGameForm, setNewGameForm]= useState(false)
 
  if(!games){
    return<p>Loading....</p>
  }

  console.log(games)

  const handleNewGameForm = ()=>{
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
      <button onClick={handleNewGameForm}>Add Game!</button>
      <hr></hr>
      {newGameForm ? (
        <NewGame consoles={consoles} genres={genres}/>

      ): null }
        {listOfGames}

    </div>
  )
}

export default GameList