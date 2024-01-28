import React from 'react'

function ConsoleList({consoles}) {

//  console.log(consoles)

return (
  <div>
    <h1>Consoles</h1>
    {consoles.map((c) => (
      <ul key={c.id}>{c.platform}</ul>
    ))}
  </div>
);
}

export default ConsoleList