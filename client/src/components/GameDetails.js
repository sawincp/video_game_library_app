import React from 'react';
import { useParams } from 'react-router-dom';


function GameDetails({games}) {

    console.log(games)

    const params= useParams()
    const gameId= Number(params.id)
    const game = games.find((g)=>g.id === gameId)

    console.log(game)

  
  return (
    <div>
        {game ? (
            <>
            <h1>{game.title}</h1>
            <img src={game.cover_art} />
            <p>Release Date: {game.release_date}</p>
            <p>Notes: {game.notes}</p>
            </>
        ): (
            <p>Game not found</p>
        )}
    </div>
  );
}

export default GameDetails;