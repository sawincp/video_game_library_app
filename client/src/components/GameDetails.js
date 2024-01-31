import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useRecoilValue } from 'recoil';
import { gameListState } from '../state/atoms/GameListState';
import EditNoteForm from './EditNoteForm'


function GameDetails() {
    
    const [isEditing, setIsEditing]= useState(false)
    // const [currentGameList, setCurrentGameList]= useRecoilState(gameListState)
    const [error, setError] = useState(null);

    const params= useParams()
    const gameId= Number(params.id)
    const gameList = useRecoilValue(gameListState);
    const game = gameList.find((g)=>g.id === gameId)

    console.log(game)

  return (
    <div>
        {game ? (
            <>
            <h1>{game.title}</h1>
            <img src={game.cover_art} />
            <p>Platform: {game.console.platform}</p>
            <p>Genre: {game.genre.genre_type}</p>
            <p>Release Date: {game.release_date}</p>
            <p>Notes For User: {game.user.username}</p>
            {game.notes}
            
            <button onClick={()=> setIsEditing((isEditing)=>!isEditing)}>
                <span role="img" aria-label="edit">✏️</span>
            </button>
            {isEditing ?(
                <EditNoteForm gameId={gameId} />
            ): null}
            
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