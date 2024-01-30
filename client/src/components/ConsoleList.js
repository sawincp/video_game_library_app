import React from 'react';
import { Link } from 'react-router-dom';

function ConsoleList({ consoles }) {
  
  const consoleList = consoles.map((c) => {
    return ( // Add the return statement
      <div key={c.id}>
        <Link to={`/consoles/${c.id}`}>{c.platform}</Link>
      </div>
    );
  });

  return (
    <div>
      <h1>Consoles</h1>
      {consoleList}
    </div>
  );
}

export default ConsoleList;