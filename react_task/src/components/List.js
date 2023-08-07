import React from 'react';

const List = () => {
  let fruits = ['mango', 'orange', 'banana', 'strawberry'];
  let colors = ['orange', 'purple', 'red', 'green', 'yellow', 'blue'];

  const listStyle = {
    textAlign:'start'
  };

  return (
    <div style={listStyle}>
      <h1>Fruit List</h1>
      <ul >
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <h1>Color List</h1>
      <ul>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
