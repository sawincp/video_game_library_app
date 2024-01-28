import React from 'react'

const GameList = ({currentGameList}) => {

  console.log(currentGameList)

  if(!currentGameList){
    return <div>Loading...</div>
  }

  return (
    <div>Game Library</div>
  )
}

export default GameList