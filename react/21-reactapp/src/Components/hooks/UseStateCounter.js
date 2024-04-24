import React, { useState, useEffect } from "react";

const UseStateCounter = () => {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState();

  // Rules of hooks
  // Always call hooks at the top level
  // dont call hooks inside conditions, loops, nested functions

  const hadleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <center>
      <h2>UseStateCounter</h2>
      <h3>counter : {count}</h3>
      <button className="btn btn-secondary" onClick={hadleIncrement}>
        Increment
      </button>
      <button className="btn btn-danger" onClick={() => {setCount(count - 1)}}>
        Decrement
      </button>
    </center>
  );
};

export default UseStateCounter;
