import React from 'react';

const Record = ({ record, onView, onEdit, onDelete, setEditedRecord }) => {
  const handleDeleteClick = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this record?');
    if (confirmDelete) {
      onDelete();
    }
  };

  return (
    <div className="record" style={{ padding: '8px', border: '1px solid #ccc', display:
    'flex', justifyContent:'space-between',alignItems:'center'}}>
      <p className="equal-width">{record.title}</p>
      <p className="equal-width" style={{ textAlign: 'center' }}>{record.upvotes}</p>
      <p className="equal-width">{record.timestamp}</p> 
      <div className="actions">
        <button className="action-button" id="view" onClick={onView}>
          View
        </button>
        <button
          className="action-button"
          id="edit"
          onClick={() => onEdit(record, setEditedRecord)}
        >
          Edit
        </button>
        <button className="action-button" id="delete" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Record;

