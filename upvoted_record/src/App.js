import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import RecordList from './components/RecordList';

function App() {
  const [input, setInput] = useState('');
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [records, setRecords] = useState(
    JSON.parse(localStorage.getItem('records')) || []
  );
  const [editedRecord, setEditedRecord] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [delayTimer, setDelayTimer] = useState(null);

  // Load records from local storage when the app starts
  useEffect(() => {
    const savedRecords = JSON.parse(localStorage.getItem('records'));
    if (savedRecords) {
      console.log('Loaded records:', savedRecords);
      setRecords(savedRecords);
    }
  }, []);

  useEffect(() => {
  if (delayTimer) {
    clearTimeout(delayTimer);
  }

  if (searchTerm !== '') {
    const newDelayTimer = setTimeout(() => {
      console.log('Searching with term:', searchTerm);
      // Implement your search logic here
    }, 2000);

    setDelayTimer(newDelayTimer);

    return () => {
      clearTimeout(newDelayTimer);
    };
  }
}, [searchTerm, delayTimer]); // Include delayTimer in the dependency array


  const handleInputChange = (event) => {
    const value = event.target.value;

    if (/^[0-9]*$/.test(value)) {
      if (value === '' || (value >= 0 && value <= 100)) {
        setInput(value);
      }
    }
  };
  const handleAddData = () => {
    if (title && input !== '' && category) {
      const newRecord = {
        id: new Date().getTime(),
        title: title,
        upvotes: parseInt(input),
        timestamp: new Date().toLocaleDateString(),
        category: category,
      };
  
      const updatedRecords = [...records, newRecord]; // Update the records
      setRecords(updatedRecords); // Update the state
      console.log('Updated records:', updatedRecords);
      console.log('Updated records length:', updatedRecords.length);
  
      // Save the updated records to local storage
      localStorage.setItem('records', JSON.stringify(updatedRecords));
      console.log('Stored records in local storage:', JSON.parse(localStorage.getItem('records')));
  
      // Clear input fields
      setTitle('');
      setInput('');
      setCategory('');
    }
  };
  

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <div className='app-container'>
    <div className='heading-container'>
    <img className="heading" src="/vote.png" alt="UpVote Task" />
    </div>
    <div className="container">
      <div className="content" style={{ display:'flex',  alignItems: 'flex-start', marginTop: '0px'}}>
     
      <Header
        title={title}
        setTitle={setTitle}
        input={input}
        setInput={setInput}
        category={category}
        setCategory={setCategory}
        handleInputChange={handleInputChange}
        handleAddData={handleAddData}
        records={records}
        setRecords={setRecords}
        editedRecord={editedRecord}
        setEditedRecord={setEditedRecord}
        handleSearchChange={handleSearchChange} // Pass the search handler to the Header component
    />
        <RecordList
          records={records}
          setRecords={setRecords}
          editedRecord={editedRecord}
          setEditedRecord={setEditedRecord}
          searchTerm={searchTerm} // Pass the search term to the RecordList component
        />
      </div>
    </div>
    </div>
  );
}

export default App;
