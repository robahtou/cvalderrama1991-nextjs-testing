'use client';


import React, { useState } from 'react';
import Icon from './Sprite';


const CounterComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ marginBlock: "20px" }}>
      <h1>Counter Component</h1>
      <p>Icon is 48x48 when even number</p>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
      {count % 2 === 0 && <Icon name="trash" style={{ width: "48px", height: "48px" }} />}
    </div>
  );
};


export default CounterComponent;
