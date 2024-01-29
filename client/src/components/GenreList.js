import React from 'react'

function GenreList({genres}) {

  return (
    <div>
    <h1>Game Genres</h1>
    {genres.map((genre)=>(
        <ul key={genre.id}>{genre.genre_type}</ul>
    ))}
  </div>
  )
}

export default GenreList
