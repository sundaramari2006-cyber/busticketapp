

import React from 'react';
// import { useNavigate } from 'react-router-dom';


function PassengerForm({ passengerDetails, handlePassengerChange, downloadTickets }) {
  // const navigate = useNavigate();

  // const handlePayAndDownload = () => {
  //   // Navigate to payment page, passing data via state
  //   navigate('/payment', { state: { passengerDetails, bus: selectedBus } });
  // };

  return (
    <div className="passenger-section">
      <h4>Passenger Details</h4>
      {passengerDetails.map((p, idx) => (
        <div key={p.seat} className="passenger-form">
          <p className="seat-label">Seat: {p.seat}</p>
          <input
            className="input-field"
            type="text"
            placeholder="Name"
            value={p.name}
            onChange={(e) => handlePassengerChange(idx, 'name', e.target.value)}
          />
          <input
            className="input-field"
            type="number"
            placeholder="Age"
            value={p.age}
            onChange={(e) => handlePassengerChange(idx, 'age', e.target.value)}
          />
          <select
            className="select-field"
            value={p.sex}
            onChange={(e) => handlePassengerChange(idx, 'sex', e.target.value)}
          >
            <option value="">Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
      ))}
      <button className="download-button" onClick={downloadTickets}>
        Pay & Download Ticket
      </button>
      {/* <button className="download-button" onClick={handlePayAndDownload}>
        Pay & Download Ticket
      </button> */}
    </div>
  );
}

export default PassengerForm;

