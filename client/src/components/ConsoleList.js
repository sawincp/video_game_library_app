import React from 'react';
import { useParams } from 'react-router-dom';

function ConsoleList({ consoles }) {
  
  const params = useParams()
  const consoleId = Number(params.id)
  
  if (!consoles) {
    return <div>Loading...</div>;
  }
  
  const platform = consoles.find((c)=> c.id === consoleId)
  
  return (
    <div>
      <h1>{platform.platform} Games</h1>
      <ul>
        {platform.games.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default ConsoleList;