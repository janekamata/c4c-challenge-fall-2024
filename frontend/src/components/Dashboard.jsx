import { useState, useEffect } from 'react';
import PartnerTile from './PartnerTile';
import Form from './Form';
/*
  The top-level component containing everything relevant to the dashboard,
  including information on each partner
*/
function Dashboard() {

  const [partners, setPartners] = useState({});
  const [isActive, setIsActive] = useState(false);

  // Handler for the add button. Changes the state used to show/hide the form.
  const handleAdd = () => {
    setIsActive(!isActive);
  };

  // Load all partners on initial page load 
  useEffect(() => {
    fetch('http://localhost:4000', {
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => setPartners(data))
  }, [])

  return (
    <div id="main-content">
      <button onClick={handleAdd}>New Partner</button>
      {isActive ? <Form></Form> : null}
      <div id="main-partners-grid">
        {Object.keys(partners).map((key) => (
          <PartnerTile key={key} partnerKey={key} partnerData={partners[key]} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;