import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'


function GameDetails({games}) {

    console.log(games)

    const params= useParams()
    const gameId= Number(params.id)
    const game = games.find((g)=>g.id === gameId)

    // console.log(game)

  
  return (
    <div>
        {game ? (
            <>
            <h1>{game.title}</h1>
            <img src={game.cover_art} />
            <p>Release Date: {game.release_date}</p>
            <p>Notes: {game.notes}</p>
            
            <Link to={`/consoles/${game.console.id}/games`}>
                <p>Find More Games on: {game.console.platform}</p>
            </Link>
            
            <Link to={`/genres/${game.genre.id}/games`}>
                <p>Find More Games like: {game.genre.genre_type}</p>
            </Link>
            </>
        ): (
            <p>Game not found</p>
        )}
    </div>
  );
}

export default GameDetails;