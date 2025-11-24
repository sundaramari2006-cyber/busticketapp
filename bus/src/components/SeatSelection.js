

// import React from 'react';

// function SeatSelection({ selectedSeats, handleSeatClick, bookedSeats = [] }) {
//   const upper = Array.from({ length: 12 }, (_, i) => `U${i + 1}`);
//   const lower = Array.from({ length: 12 }, (_, i) => `L${i + 1}`);

//   const renderSeats = (berths) => {
//     let rows = [];
//     for (let i = 0; i < berths.length; i += 3) {
//       rows.push(
//         <div className="seat-row" key={`row-${i}`}>
//           {[0, 1, 2].map((offset) => {
//             const seat = berths[i + offset];
//             if (!seat) return null;

//             const isBooked = bookedSeats.includes(seat);
//             const isSelected = selectedSeats.includes(seat);

//             return (
//               <button
//                 key={seat}
//                 className={`seat ${offset < 2 ? 'left-seat' : 'right-seat'}
//                   ${isBooked ? 'booked' : ''}
//                   ${isSelected ? 'selected-red' : ''}`}
//                 onClick={() => handleSeatClick(seat)}
//                 disabled={isBooked}
//               >
//                 {seat}
//               </button>
//             );
//           })}
//         </div>
//       );
//     }
//     return rows;
//   };

//   return (
//     <div className="seats-container">
//       <h4>Select Seats</h4>
//       <div className="berth-container">
//         <div className="berth-section">
//           <h5>Upper Berth</h5>
//           <div className="seat-grid">{renderSeats(upper)}</div>
//         </div>
//         <div className="berth-section">
//           <h5>Lower Berth</h5>
//           <div className="seat-grid">{renderSeats(lower)}</div>
//         </div>
//       </div>
//     </div>
//   );
// }

//  export default SeatSelection;


import React from 'react';

function SeatSelection({ selectedSeats, handleSeatClick, bookedSeats = [] }) {
  const upper = Array.from({ length: 12 }, (_, i) => `U${i + 1}`);
  const lower = Array.from({ length: 12 }, (_, i) => `L${i + 1}`);

  const renderSeats = (berths) => {
    let rows = [];
    for (let i = 0; i < berths.length; i += 3) {
      rows.push(
        <div className="seat-row" key={`row-${i}`}>
          {[0, 1, 2].map((offset) => {
            const seat = berths[i + offset];
            if (!seat) return null;

            const isBooked = bookedSeats.includes(seat);
            const isSelected = selectedSeats.includes(seat);

            const isDisabled = isBooked || isSelected; // Disable both booked & selected

            return (
              <button
                key={seat}
                className={`seat 
                  ${offset < 2 ? 'left-seat' : 'right-seat'}
                  ${isBooked ? 'booked' : ''}
                  ${isSelected ? 'selected-red' : ''}
                `}
                onClick={() => !isDisabled && handleSeatClick(seat)}
                disabled={isDisabled}
              >
                {seat}
              </button>
            );
          })}
        </div>
      );
    }
    return rows;
  };

  return (
    <div className="seats-container">
      <h4>Select Seats</h4>
      <div className="berth-container">
        <div className="berth-section">
          <h5>Upper Berth</h5>
          <div className="seat-grid">{renderSeats(upper)}</div>
        </div>
        <div className="berth-section">
          <h5>Lower Berth</h5>
          <div className="seat-grid">{renderSeats(lower)}</div>
        </div>
      </div>
    </div>
  );
}

export default SeatSelection;

// import React, { useState, useEffect } from 'react';

// function SeatSelection({ busName = "KPN Travels", travelDate = "2025-06-01", travelTime = "10:00 AM" }) {
//   const upper = Array.from({ length: 12 }, (_, i) => `U${i + 1}`);
//   const lower = Array.from({ length: 12 }, (_, i) => `L${i + 1}`);
//   const [bookedSeats, setBookedSeats] = useState([]);

//   // Load all booked data from localStorage
//   useEffect(() => {
//     const storedData = JSON.parse(localStorage.getItem("bookedSeatsData")) || [];
//     setBookedSeats(storedData);
//   }, []);

//   const handleSeatClick = (seat) => {
//     const newBooking = {
//       seat,
//       busName,
//       date: travelDate,
//       time: travelTime
//     };

//     const updatedBookedSeats = [...bookedSeats, newBooking];
//     setBookedSeats(updatedBookedSeats);
//     localStorage.setItem("bookedSeatsData", JSON.stringify(updatedBookedSeats));
//   };

//   const isSeatBooked = (seat) => {
//     return bookedSeats.some(
//       booking =>
//         booking.seat === seat &&
//         booking.busName === busName &&
//         booking.date === travelDate &&
//         booking.time === travelTime
//     );
//   };

//   const renderSeats = (berths) => {
//     let rows = [];
//     for (let i = 0; i < berths.length; i += 3) {
//       rows.push(
//         <div className="seat-row" key={`row-${i}`}>
//           {[0, 1, 2].map((offset) => {
//             const seat = berths[i + offset];
//             if (!seat) return null;

//             const isBooked = isSeatBooked(seat);

//             return (
//               <button
//                 key={seat}
//                 className={`seat 
//                   ${offset < 2 ? 'left-seat' : 'right-seat'}
//                   ${isBooked ? 'selected-red' : ''}
//                 `}
//                 onClick={() => !isBooked && handleSeatClick(seat)}
//                 disabled={isBooked}
//               >
//                 {seat}
//               </button>
//             );
//           })}
//         </div>
//       );
//     }
//     return rows;
//   };

//   // Show only the booked seats for this bus, date, and time
//   const filteredBookedSeats = bookedSeats.filter(
//     booking =>
//       booking.busName === busName &&
//       booking.date === travelDate &&
//       booking.time === travelTime
//   );

//   return (
//     <div className="seats-container">
//       <h4>Select Seats for {busName} on {travelDate} at {travelTime}</h4>
//       <div className="berth-container">
//         <div className="berth-section">
//           <h5>Upper Berth</h5>
//           <div className="seat-grid">{renderSeats(upper)}</div>
//         </div>
//         <div className="berth-section">
//           <h5>Lower Berth</h5>
//           <div className="seat-grid">{renderSeats(lower)}</div>
//         </div>
//       </div>

//       <h4>Booked Seats Info:</h4>
//       <ul>
//         {filteredBookedSeats.map((booking, index) => (
//           <li key={index}>
//             Seat: <strong>{booking.seat}</strong>, Bus: {booking.busName}, Date: {booking.date}, Time: {booking.time}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default SeatSelection;
