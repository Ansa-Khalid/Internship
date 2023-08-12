import React, { useState } from 'react';
import Record from './Records';
import SearchSortButtons from './SearchSortButtons';
import { Box } from '@mui/material'; // Import Box component from MUI

const RecordList = ({ records, setRecords, setEditedRecord }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('mostUpvoted');
  const [showModal, setShowModal] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

  const handleViewRecord = (record) => {
    setSelectedRecord(record);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedRecord(null);
    setShowModal(false);
  };

  const handleSearchChange = (newSearchTerm) => {
    setSearchTerm(newSearchTerm.toLowerCase());
  };

  const handleEditRecord = (record) => {
    setEditedRecord(record);
  };

  const filteredRecords = records.filter(
    (record) =>
      record.title.toLowerCase().includes(searchTerm) &&
      record.title.toLowerCase().startsWith(searchTerm)
  );

  const handleDeleteRecord = (recordToDelete) => {
    const updatedRecords = records.filter((record) => record !== recordToDelete);
    setRecords(updatedRecords);
  };
  
  const handleSort = (type) => {
    setSortType(type);
  
    // Sorting logic
    if (type === 'mostUpvoted') {
      const sortedRecords = [...records].sort((a, b) => b.upvotes - a.upvotes);
      setRecords(sortedRecords);
    } else if (type === 'mostRecent') {
      const sortedRecords = [...records].sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
      setRecords(sortedRecords);
    }
  };

  return (
    <Box className="right-section" style={{ marginTop: '50px' ,backgroundColor: '#fff', padding: '20px',  borderRadius: '8px',marginLeft:'60px'}}> 
    <Box className="search-sort-container"> 
      <SearchSortButtons
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
        sortType={sortType}
        handleSort={handleSort}
      />
    </Box>
    <Box className="records-container" style={{ width: '100%', display:'flex',justifyContent:'space-between',alignItems:'center'}}> 
    <Box className="records" style={{ width: '100%', maxHeight: '350px', overflowY: 'auto' }}>
  <Box className="record" style={{ padding: '5px', border: '1px solid #ccc', display: 'flex', alignItems: 'center' }}>
    <h4 className='equal-width'>Title</h4>
    <h4 className='equal-width'>UpVoted</h4>
    <h4 className='equal-width'>Timestamp</h4>
    <h4 className='equal-width'>Actions</h4>
  </Box>
  {filteredRecords.map((record, index) => (
    <Record
      key={index}
      record={record}
      onView={() => handleViewRecord(record)}
      onEdit={() => handleEditRecord(record)}
      onDelete={() => handleDeleteRecord(record)}
      setEditedRecord={setEditedRecord} // Add this line
    />
  ))}
</Box>

    </Box>
    {showModal && selectedRecord && (
      <Box className="modal-container" style={{ width: '100%', height: '100%',backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex:'1000', position: 'fixed', top: '0',left: '0', display:'flex', justifyContent: 'center', alignItems: 'center'}}>
        <Box className="modal-content"> 
          <h3>Record Details</h3>
          <p>Title: {selectedRecord.title}</p>
          <p>Upvotes: {selectedRecord.upvotes}</p>
          <p>Timestamp: {selectedRecord.timestamp}</p>
          <button className="close-button" onClick={handleCloseModal}>
            <i className="fas fa-times"></i>
          </button>
        </Box>
      </Box>
    )}
  </Box>
  );
};

export default RecordList;
