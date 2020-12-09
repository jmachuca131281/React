import React, {useState, useEffect, use} from 'react'

function UseState() {

  const [count, setCount] = useState(0);
  const [subtract, setSubtract] = useState(100);

  useEffect(() => {
    document.title = `You clicked ${count} times since useEfect`;
  });

  const handledAdd = () => {
    setSubtract(subtract -1);
  }
  const handledReset = () => setCount( 0 );

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <h2>You clicked {subtract} times</h2>
      <button onClick={handledAdd}> -1 </button>
      <h3>Reset</h3>
      <button onClick={handledReset}>Reset</button>
    </div>
  );
}

export default UseState;
