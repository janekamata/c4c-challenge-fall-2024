import React from 'react';

/*
  A block for a single partner, containing information for them
  along with any tools to manage said information
*/

function PartnerTile({ partnerKey, partnerData }) {
  
  const { thumbnailUrl, name, active, description } = partnerData;

  // Handler for delete button. Sends DELETE with partnerKey then reloads to show change.
  const handleDeleteClick = () => {
    fetch('http://localhost:4000', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify({ key: partnerKey }) 
    }).then(() => window.location.reload(true));
  };

  return (
    <div className="partner-tile">
      <img className="partner-thumbnail" src={thumbnailUrl} />
      <div className="partner-info">
        <div className="partner-name">
          {name}
        </div>
        <div className="partner-active">
          {active}
        </div>
        <div className="partner-description">
          {description}
        </div>
      </div>
      <button className="delete-button" onClick={handleDeleteClick}>Delete</button>
    </div>
  )
};

export default PartnerTile;