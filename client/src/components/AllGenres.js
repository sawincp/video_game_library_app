import React from 'react'

function AllGenres({genres}) {
  return (
    <div>
        <h1>Total Genres </h1>
        {genres.slice(1).map((g)=>(
            <h3 key={g.id}>{g.genre_type}</h3>
        ))}
    </div>
  )
}

export default AllGenres