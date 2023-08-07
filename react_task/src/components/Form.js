import React, { useState } from 'react';

const Form = () => {
  const [inputValue, setInputValue] = useState('');

  const handlePress = (event) => {
    if (event.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (inputValue.trim() !== '') {
      alert(`Hello ${inputValue}!`);
      setInputValue('');
    }
  };

  return (
    <div>
      <br />
      <input
        type="text"
        placeholder="Enter your Name"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handlePress}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Form;
