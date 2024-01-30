import React, { useState } from 'react'
import NewGame from './NewGame'

const GameList = ({games, consoles, genres }) => {

  console.log(consoles)
  
  const [newGameForm, setNewGameForm]= useState(false)

  function handleNewGameForm(){
    setNewGameForm(!newGameForm)
  }

  // const listOfGames = games.map(game =>(
  //   <div key={game.id}>
  //     <h3>{game.title}</h3>
  //   </div>
  // ))

  return (
    <div>
      <h1>Game Library</h1>
      <button onClick={handleNewGameForm}>Add New Game!</button>
      <hr></hr>
      {newGameForm ? (
        <NewGame consoles={consoles} genres={genres}/>
      ): null}
      {/* {listOfGames} */}
    </div>
  )
}

export default GameList