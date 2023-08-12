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
    <Box className="left-section" style={{ backgroundColor: '#fff', padding: '20px',  borderRadius: '8px'}}>
      <p>For the state management use usereducer with usecontext hooks.</p><br />
      <h4>{editedRecord ? 'Edit Record' : 'Add Record'}</h4>
      <Box className="input-section">
        <Box className="input-fields">
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
            sx={{ marginBottom: '10px', width: '100%' }}
          />

          <TextField
            type="text"
            id="upvotes"
            placeholder="Enter upvotes (0-100)..."
            value={editedRecord ? editedRecord.upvotes.toString() : input}
            onChange={(e) => {
              const value = parseInt(e.target.value);
              if (!isNaN(value) && value >= 0 && value <= 100) {
                if (editedRecord) {
                  setEditedRecord((prevRecord) => ({
                    ...prevRecord,
                    upvotes: value,
                  }));
                } else {
                  setInput(value);
                }
              }
            }}
            sx={{ marginBottom: '10px', width:'100%'}}
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
            sx={{ marginBottom: '10px', width: '100%' }}
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
