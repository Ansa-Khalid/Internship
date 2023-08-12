import React, { useState, useEffect } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const SearchSortButtons = ({ searchTerm, handleSearchChange, sortType, handleSort }) => {
  const [searchTermDelayed, setSearchTermDelayed] = useState(searchTerm);
  const [delayTimer, setDelayTimer] = useState(null);

  useEffect(() => {
    if (delayTimer) {
      clearTimeout(delayTimer);
    }

    const newDelayTimer = setTimeout(() => {
      handleSearchChange(searchTermDelayed);
    }, 2000);

    setDelayTimer(newDelayTimer);

    return () => {
      clearTimeout(newDelayTimer);
    };
  }, [searchTermDelayed, handleSearchChange]);

  const handleChange = (event) => {
    const newSearchTerm = event.target.value;
    setSearchTermDelayed(newSearchTerm);
  };

  return (
    <Box className="search-sort-container" style={{ width: '350px', marginBottom: '22px', justifyContent: 'center', alignItems: 'center'}}>
    <Box className="search" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
  <TextField
    type="text"
    id="searchInput"
    placeholder="Search"
    value={searchTermDelayed}
    onChange={handleChange}
    variant="outlined"
    fullWidth
    sx={{
      padding: '10px',
      borderRadius: '5px',
      width: '280px',
      boxShadow: '0px 0px 0px #ccc',
      bottom: '20px',
    }}
  />
</Box>
      <Box className="sort-options" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Typography variant="body1">Sort By</Typography>
        <Box className="sort-buttons" sx={{ display: 'flex', gap: '10px', alignItems: 'center'}}>
          <Button
            className={`sort-button ${sortType === 'mostUpvoted' ? 'active' : ''}`}
            onClick={() => handleSort('mostUpvoted')}
            sx={{
              marginLeft: '10px',
              padding: '6px',
              backgroundColor: sortType === 'mostUpvoted' ? '#036d26' : '#009432',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              '&:hover': {
              backgroundColor: '#036d26',
            },
            }}
          >
            Most Upvoted
          </Button>
          <Button
            className={`sort-button ${sortType === 'mostRecent' ? 'active' : ''}`}
            onClick={() => handleSort('mostRecent')}
            sx={{
              marginLeft: '10px',
              padding: '6px',
              backgroundColor: sortType === 'mostRecent' ? '#036d26' : '#009432',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'background-color 0.3s',
              '&:hover': {
              backgroundColor: '#036d26',
            },
            }}
          >
            Most Recent
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SearchSortButtons;
