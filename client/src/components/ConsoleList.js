import React from 'react'
import { useRecoilValue } from 'recoil';
import { consoleState } from '../state/atoms/ConsoleState';

function ConsoleList({consoles}) {
  

return (
  <div>
    <h1>Consoles</h1>
   {consoles.map((c)=>{
    return(
      <ul key={c.id}>{c.platform}</ul>
    )
   })}
  </div>
);
}

export default ConsoleList