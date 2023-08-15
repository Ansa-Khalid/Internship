import React from 'react';
import { TextField, Button, Box } from '@mui/material';

const Header = ({
  title,
  setTitle,
  input,
  setInput,
  category,
  setCategory,
  handleInputChange,
  handleAddData,
  editedRecord,
  records,
  setRecords,
  setEditedRecord,
}) => {
  const isAnyFieldEmpty = () => {
    if (editedRecord) {
      return !editedRecord.title || editedRecord.upvotes === '' || !editedRecord.category;
    }
    return !title || input === '' || !category;
  };

  const handleSaveData = () => {
    if (editedRecord) {
      if (editedRecord.title && editedRecord.upvotes !== '' && editedRecord.category) {
        const editedIndex = records.findIndex((record) => record.id === editedRecord.id);

        if (editedIndex !== -1) {
          const updatedRecords = [...records];
          updatedRecords[editedIndex] = editedRecord;

          setRecords(updatedRecords);
          setEditedRecord(null);
        }
      }
    }
  };

  return (
    <Box className="left-section" style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px' ,marginRight:'15px', marginTop: '20px', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}>
      <h3>{editedRecord ? 'Edit Record' : 'Add Record'}</h3>
  
      <Box className="input-section" style={{marginTop:'10px'}}>
        <Box className="input-fields" style={{width:'100%'}}>
        <TextField
  type="text"
  id="title"
  placeholder="Enter title..."
  value={editedRecord ? editedRecord.title : title}
  onChange={(e) => {
    if (editedRecord) {
      setEditedRecord((prevRecord) => ({
        ...prevRecord,
        title: e.target.value,
      }));
    } else {
      setTitle(e.target.value);
    }
  }}
  sx={{ marginBottom: '10px', width: '100%' }} // Remove padding and height
/>

<TextField
  type="text"
  id="upvotes"
  placeholder="Enter upvotes (0-100)..."
  value={editedRecord ? editedRecord.upvotes.toString() : input}
  onChange={(e) => {
    const value = e.target.value.trim(); // Trim whitespace
    if (value === '' || (!isNaN(value) && parseInt(value) >= 0 && parseInt(value) <= 100)) {
      if (editedRecord) {
        setEditedRecord((prevRecord) => ({
          ...prevRecord,
          upvotes: value === '' ? '' : parseInt(value), // Keep it as a string if empty
        }));
      } else {
        setInput(value === '' ? '' : parseInt(value));
      }
    }
  }}
  sx={{ marginBottom: '10px', width: '100%' }} // Remove padding and height
/>


<TextField
  type="date"
  id="category"
  placeholder="Enter Date..."
  value={editedRecord ? editedRecord.category : category}
  onChange={(e) => {
    if (editedRecord) {
      setEditedRecord((prevRecord) => ({
        ...prevRecord,
        category: e.target.value,
      }));
    } else {
      setCategory(e.target.value);
    }
  }}
  sx={{ marginBottom: '10px', width: '100%' }} // Remove padding and height
/>
        </Box>
        <Button
          id="addButton"
          onClick={editedRecord ? handleSaveData : handleAddData}
          disabled={isAnyFieldEmpty()}
          sx={{
            backgroundColor: isAnyFieldEmpty() ? 'rgba(0, 148, 50, 0.5)' : '#009432',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            padding: '15px',
            cursor: isAnyFieldEmpty() ? 'not-allowed' : 'pointer',
            fontStyle: 'bold',
            '&:hover': {
              backgroundColor: '#036d26',
            },
          }}
          fullWidth
        >
          {editedRecord ? 'Save Data' : 'Add Data'}
        </Button>
      </Box>
    </Box>
  );
};

export default Header;
