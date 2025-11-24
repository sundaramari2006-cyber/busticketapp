// import React from 'react';
// import SeatSelection from './SeatSelection';
// import PassengerForm from './PassengerForm';
// import TicketDownload from './TicketDownload';

// function BusCard({
//   bus,
//   isSelected,
//   onSelect,
//   selectedSeats,
//   setSelectedSeats,
//   passengerDetails,
//   setPassengerDetails
// }) {
//   const handleSeatClick = (seat) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter((s) => s !== seat));
//       setPassengerDetails(passengerDetails.filter((p) => p.seat !== seat));
//     } else {
//       setSelectedSeats([...selectedSeats, seat]);
//       setPassengerDetails([...passengerDetails, { seat, name: '', age: '', sex: '' }]);
//     }
//   };

//   const handlePassengerChange = (index, field, value) => {
//     const updated = [...passengerDetails];
//     updated[index][field] = value;
//     setPassengerDetails(updated);
//   };

//   return (
//     <div className="bus-card">
//       <p><strong>Bus Name:</strong> {bus.name}</p>
//       <p><strong>From:</strong> {bus.from} → <strong>To:</strong> {bus.to}</p>
//       <p><strong>Date:</strong> {bus.date}</p>
//       <p><strong>Time:</strong> {bus.time}</p>
//       <p><strong>Prize: </strong> 450</p>
//       <button onClick={onSelect}>Book Seat</button>

//       {isSelected && (
//         <>
//           <SeatSelection selectedSeats={selectedSeats} handleSeatClick={handleSeatClick} />
//           <PassengerForm
//             passengerDetails={passengerDetails}
//             handlePassengerChange={handlePassengerChange}
//             downloadTickets={() => TicketDownload(passengerDetails, bus)}
//           />
//         </>
//       )}
//     </div>
//   );
// }

// export default BusCard;
// import React from 'react';
// import SeatSelection from './SeatSelection';
// import PassengerForm from './PassengerForm';
// import TicketDownload from './TicketDownload';


// function BusCard({
//   bus,
//   isSelected,
//   onSelect,
//   selectedSeats,
//   setSelectedSeats,
//   passengerDetails,
//   setPassengerDetails
// }) {
//   // const [selectedBus, setSelectedBus] = useState(null);

//   const handleSeatClick = (seat) => {
//     if (selectedSeats.includes(seat)) {
//       setSelectedSeats(selectedSeats.filter((s) => s !== seat));
//       setPassengerDetails(passengerDetails.filter((p) => p.seat !== seat));
//     } else {
//       setSelectedSeats([...selectedSeats, seat]);
//       setPassengerDetails([...passengerDetails, { seat, name: '', age: '', sex: '' }]);
//     }
//   };

//   const handlePassengerChange = (index, field, value) => {
//     const updated = [...passengerDetails];
//     updated[index][field] = value;
//     setPassengerDetails(updated);
//   };

//   return (
//     <div className="bus-card">
//       <p><strong>Bus Name:</strong> {bus.name}</p>
//       <p><strong>From:</strong> {bus.from} → <strong>To:</strong> {bus.to}</p>
//       <p><strong>Date:</strong> {bus.date}</p>
//       <p><strong>Time:</strong> {bus.time}</p>
//       <p><strong>Price:</strong> ₹450</p>
//       <button className="book-seat-btn" onClick={onSelect}>Book Seat</button>

//       {isSelected && (
//         <div className="seat-passenger-section">
          
//           <SeatSelection
//             selectedSeats={selectedSeats}
//             handleSeatClick={handleSeatClick}
//           />
//           <PassengerForm
//             passengerDetails={passengerDetails}
//             handlePassengerChange={handlePassengerChange}
//             downloadTickets={() => TicketDownload(passengerDetails, bus)}
//           />
          
          
//         </div>
//       )}
//     </div>
//   );
// }

// export default BusCard;

import React, { useEffect, useState } from 'react';
import SeatSelection from './SeatSelection';
import PassengerForm from './PassengerForm';
import TicketDownload from './TicketDownload';

function BusCard({
  bus,
  isSelected,
  onSelect,
  selectedSeats,
  setSelectedSeats,
  passengerDetails,
  setPassengerDetails
}) {
  const [bookedSeats, setBookedSeats] = useState([]);

  // Load booked seats from localStorage on mount and whenever bus.id changes
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookings')) || [];
    const busBookings = stored
      .filter((b) => b.bus.id === bus.id)
      .flatMap((b) => b.passengers.map((p) => p.seat));
    setBookedSeats(busBookings);
  }, [bus.id]);

  const handleSeatClick = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
      setPassengerDetails(passengerDetails.filter((p) => p.seat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
      setPassengerDetails([...passengerDetails, { seat, name: '', age: '', sex: '' }]);
    }
  };

  const handlePassengerChange = (index, field, value) => {
    const updated = [...passengerDetails];
    updated[index][field] = value;
    setPassengerDetails(updated);
  };

  const handlePaymentAndDownload = () => {
    // Validate all passenger details are filled
    const allFilled = passengerDetails.every(p => p.name && p.age && p.sex);
    if (!allFilled) {
      alert("Please fill all passenger details.");
      return;
    }

    // Get previous bookings from localStorage
    const prevBookings = JSON.parse(localStorage.getItem('bookings')) || [];

    // Add new booking for this bus
    const newBooking = {
      bus,
      passengers: passengerDetails
    };

    // Append new booking to all bookings
    const updatedBookings = [...prevBookings, newBooking];

    // Save updated bookings back to localStorage
    localStorage.setItem('bookings', JSON.stringify(updatedBookings));

    // Reload bookedSeats ONLY for this bus from updated bookings
    const busBookings = updatedBookings
      .filter(b => b.bus.id === bus.id)
      .flatMap(b => b.passengers.map(p => p.seat));
    setBookedSeats(busBookings);

    // Trigger ticket download
    TicketDownload(passengerDetails, bus);

    // Clear current seat selection and passenger details
    setSelectedSeats([]);
    setPassengerDetails([]);
  };

  return (
    <div className="bus-card">
      <p><strong>Bus Name:</strong> {bus.name}</p>
      <p><strong>From:</strong> {bus.from} → <strong>To:</strong> {bus.to}</p>
      <p><strong>Date:</strong> {bus.date}</p>
      <p><strong>Time:</strong> {bus.time}</p>
      <p><strong>Price:</strong> ₹450</p>
      <button className="book-seat-btn" onClick={onSelect}>Book Seat</button>

      {isSelected && (
        <div className="seat-passenger-section">
          <SeatSelection
            selectedSeats={selectedSeats}
            handleSeatClick={handleSeatClick}
            bookedSeats={bookedSeats}
          />
          <PassengerForm
            passengerDetails={passengerDetails}
            handlePassengerChange={handlePassengerChange}
            downloadTickets={handlePaymentAndDownload}
          />
        </div>
      )}
    </div>
  );
}

export default BusCard;
