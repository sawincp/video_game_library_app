import React from 'react';
import { useRecoilValue } from 'recoil';
import { consoleState } from '../state/atoms/ConsoleState';

function AllConsoles() {
  
    const consoles = useRecoilValue(consoleState)

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