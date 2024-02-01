import React from 'react'
import { useParams } from 'react-router-dom'

function GenreList({genres}) {

  console.log(genres)

  const params = useParams()
  const genreId = Number(params.id)

  if (!genres) {
    return <div>Loading...</div>;
  }
  const gameGenre = genres.find((genre)=> genre.id === genreId)

  console.log(gameGenre)

  return (
    <div>
      <h1>{gameGenre.genre_type} Games</h1>
      <ul>
        {gameGenre.games.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </div>
  )
}

export default GenreList