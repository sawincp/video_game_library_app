import React from 'react'
import { useRecoilValue } from 'recoil'
import { genreState} from '../state/atoms/GenreState'
function AllGenres() {

  const genres = useRecoilValue(genreState)
  
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