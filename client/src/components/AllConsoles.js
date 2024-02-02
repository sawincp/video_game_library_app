import React from 'react';

function AllConsoles({ consoles }) {
  
    // console.log("Consoles", consoles);

  return (
    <div>
      <h1>Total Consoles</h1>
      {consoles.slice(1).map((c) => (
        <h3 key={c.id}>{c.platform}</h3> 
      ))}
    </div>
  );
}

export default AllConsoles;