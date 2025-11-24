// import React from 'react';
// import TicketDownload from './TicketDownload';

// function Payment({ bus, passengerDetails }) {
//   const handlePay = () => {
//     alert('Payment successful! Ticket will be downloaded.');
//     TicketDownload(passengerDetails, bus);
//   };

//   return (
//     <div className="payment-card">
//       <h3>Review & Pay</h3>
//       <p><strong>Bus:</strong> {bus.name}</p>
//       <p><strong>Route:</strong> {bus.from} → {bus.to}</p>
//       <p><strong>Date & Time:</strong> {bus.date} at {bus.time}</p>

//       <h4>Passenger Details:</h4>
//       <ul>
//         {passengerDetails.map((p, index) => (
//           <li key={index}>
//             Seat {p.seat} - {p.name}, {p.age} yrs, {p.sex}
//           </li>
//         ))}
//       </ul>

//       <button onClick={handlePay}>Pay & Download Ticket</button>
//     </div>
//   );
// }

// export default Payment;

// // PaymentPage.js
// import React from 'react';

// function PaymentPage({ finalPassengers }) {
//   const farePerSeat = 450;
//   const totalFare = finalPassengers.length * farePerSeat;

//   const handlePay = () => {
//     const ticketContent = `
//       GoBus Ticket\n
//       ---------------------
//       ${finalPassengers.map(p => `Seat: ${p.seat} | Name: ${p.name} | Age: ${p.age} | Gender: ${p.sex}`).join('\n')}
//       ---------------------
//       Total Fare: ₹${totalFare}
//     `;

//     const blob = new Blob([ticketContent], { type: 'text/plain' });
//     const url = URL.createObjectURL(blob);
//     const a = document.createElement('a');
//     a.href = url;
//     a.download = 'GoBus_Ticket.txt';
//     a.click();
//     URL.revokeObjectURL(url);
//   };

//   return (
//     <div className="payment-page">
//       <h1>GoBus</h1>
//       <h2>Passenger & Ticket Summary</h2>
//       {finalPassengers.map((p, idx) => (
//         <div key={idx} className="ticket-detail">
//           <p>Seat: {p.seat} | Name: {p.name} | Age: {p.age} | Gender: {p.sex} | Fare: ₹{farePerSeat}</p>
//         </div>
//       ))}
//       <h3>Total: ₹{totalFare}</h3>
//       <button onClick={handlePay}>Pay</button>
//     </div>
//   );
// }

// export default PaymentPage;

// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import TicketDownload from './TicketDownload';

// function PaymentPage() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { bus, passengerDetails } = location.state || {};

//   if (!bus || !passengerDetails) {
//     // Redirect or show fallback UI
//     return (
//       <div>
//         <h2>Error: Missing bus or passenger details.</h2>
//         <button onClick={() => navigate('/bus-selection')}>Go back to Search</button>
//       </div>
//     );
//   }

//   const handlePay = () => {
//     alert('Payment successful! Ticket will be downloaded.');
//     TicketDownload(passengerDetails, bus);
//   };

//   return (
//     <div className="payment-card">
//       <h3>Review & Pay</h3>
//       <p><strong>Bus:</strong> {bus.name}</p>
//       <p><strong>Route:</strong> {bus.from} → {bus.to}</p>
//       <p><strong>Date & Time:</strong> {bus.date} at {bus.time}</p>

//       <h4>Passenger Details:</h4>
//       <ul>
//         {passengerDetails.map((p, index) => (
//           <li key={index}>
//             Seat {p.seat} - {p.name}, {p.age} yrs, {p.sex}
//           </li>
//         ))}
//       </ul>

//       <button onClick={handlePay}>Pay & Download Ticket</button>
//     </div>
//   );
// }

// export default PaymentPage;

// import React from 'react';
// import { useLocation } from 'react-router-dom';

// function Payment() {
//   const location = useLocation();
//   const { passengerDetails, bus } = location.state || {};

//   if (!passengerDetails || !bus) {
//     return <p>Error: Missing data for payment.</p>;
//   }

//   const handlePay = () => {
//     alert('Payment successful! Downloading ticket...');
//     // Implement your ticket download logic here
//   };

//   return (
//     <div>
//       <h2>Payment for {bus.name}</h2>
//       <p>Route: {bus.from} → {bus.to}</p>
//       <p>Date & Time: {bus.date} {bus.time}</p>

//       <h3>Passenger Details:</h3>
//       <ul>
//         {passengerDetails.map((p, idx) => (
//           <li key={idx}>Seat {p.seat} - {p.name}, {p.age} yrs, {p.sex}</li>
//         ))}
//       </ul>

//       <button onClick={handlePay}>Pay & Download Ticket</button>
//     </div>
//   );
// }

// export default Payment;

import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Payment() {
  const location = useLocation();
  const navigate = useNavigate();
  const { passengerDetails, bus } = location.state || {};

  if (!passengerDetails || !bus) {
    return <p>Error: Missing data for payment.</p>;
  }

  const handlePayAndDownload = () => {
    // Simulate ticket content
    const ticketContent = `
      --- GoBus Ticket ---
      Bus Name: ${bus.name}
      Route: ${bus.from} → ${bus.to}
      Date & Time: ${bus.date} ${bus.time}
      
      Passengers:
      ${passengerDetails.map((p, i) => 
        `Seat ${p.seat}: ${p.name}, ${p.age} yrs, ${p.sex}`).join('\n')}
      
      Thank you for booking with GoBus!
    `;

    // Create a blob and trigger download
    const blob = new Blob([ticketContent], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'ticket.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert('Payment successful! Ticket downloaded.');
    navigate('/'); // Redirect to home or another page after payment
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Payment for {bus.name}</h2>
      <p><strong>Route:</strong> {bus.from} → {bus.to}</p>
      <p><strong>Date & Time:</strong> {bus.date} {bus.time}</p>

      <h3>Passenger Details:</h3>
      <ul>
        {passengerDetails.map((p, idx) => (
          <li key={idx}>
            <strong>Seat {p.seat}</strong> - {p.name}, {p.age} yrs, {p.sex}
          </li>
        ))}
      </ul>

      <button onClick={handlePayAndDownload} style={{ marginTop: '20px', padding: '10px 20px' }}>
        Pay & Download Ticket
      </button>
    </div>
  );
}

export default Payment;
