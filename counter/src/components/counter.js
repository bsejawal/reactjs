import React from 'react';
const Counter = ({ value, name, index, incrementCount, decrementCount }) => {
      return (
            <div key={index}>
                  <h1>{value}</h1>
                  <p>{name}</p>
                  <p>
                        <button onClick={() => incrementCount(index)}>+</button>
                        <button onClick={() => decrementCount(index)}>-</button>
                  </p>
            </div>
      );
}
export default Counter;