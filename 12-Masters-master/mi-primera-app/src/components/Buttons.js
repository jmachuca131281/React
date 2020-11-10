import React from 'react';

export default function Bottons(props) {
  const { fnShowName } = props;

  return(
    <div>
      <h1>Buttons</h1>
      <button onClick={ () => fnShowName("José Machuca") } >CLICK</button>
    </div>
  );
}