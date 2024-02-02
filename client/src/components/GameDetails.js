import React, {useState} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom'
import { useRecoilValue, useRecoilState } from 'recoil';
import { gameListState } from '../state/atoms/GameListState';
import { userState } from '../state/atoms/UserState';
import EditNoteForm from './EditNoteForm'
import axios from 'axios';


function GameDetails() {
    const [games, setGames]=useRecoilState(gameListState)

    const currentUser = useRecoilValue(userState)
    const currentUserId = currentUser.id    
    
    const [isEditing, setIsEditing]= useState(false)
    const [error, setError] = useState(null);

    const params= useParams()
    const gameId= Number(params.id)
    const gameList = useRecoilValue(gameListState);
    const game = gameList.find((g)=>g.id === gameId)

    console.log(game)

    const handleDeleteNote = async () => {
        try {
          await axios.delete(`/games/${gameId}`);
          setGames((currentGames) =>
            currentGames.map((g) => (g.id === gameId ? { ...g, notes: '' } : g))
          );
        } catch (error) {
          console.log(error);
        //   setError();
        }
      };
      
      return (
        <div>
          {game ? (
            <>
              <h1>{game.title}</h1>
              <img src={game.cover_art} alt="coverArt" />
              <p>Platform: {game.console.platform}</p>
              <p>Genre: {game.genre.genre_type}</p>
              <p>Release Date: {game.release_date}</p>
              <p>Notes For User: {game.user.username}</p>
              {game.notes}
      
              {currentUserId === game.user.id && (
                <>
                  <button onClick={() => setIsEditing((isEditing) => !isEditing)}>
                    <span role="img" aria-label="edit">✏️</span>
                  </button>
                  <button onClick={handleDeleteNote}>
                    <span role="img" aria-label="delete">
                    🗑
                    </span>
                  </button>
                  {isEditing && <EditNoteForm gameId={gameId} />}
                </>
              )}
      
              <Link to={`/consoles/${game.console.id}/games`}>
                <p>Find More Games on: {game.console.platform}</p>
              </Link>
              <Link to={`/genres/${game.genre.id}/games`}>
                <p>Find More Games like: {game.genre.genre_type}</p>
              </Link>
            </>
          ) : (
            <p>Game not found</p>
          )}
        </div>
      );
}

export default GameDetails;