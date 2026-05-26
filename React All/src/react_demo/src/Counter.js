import { useState } from 'react';
const Counter = () => {
  const [count, setCount] = useState (0);
  return (
    <>
      <p>You clicked count {count} times</p>
      <button onClick={() => setCount(count + 1)}> Increase </button>
      <button onClick={() => setCount(count - 1)}> Decrease </button>
      <button onClick={() => setCount(0)}> Reset </button>
      <input type="number" value={count} onChange={(e) => setCount(Number(e.target.value))} />
    </>
  );
};
export default Counter;