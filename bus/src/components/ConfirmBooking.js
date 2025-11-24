// import React from 'react';
// import axios from 'axios';

// function ConfirmBooking({ selectedSeats, selectedBus, user }) {
//   const handleConfirm = async () => {
//     if (selectedSeats.length === 0) {
//       alert('Please select at least one seat.');
//       return;
//     }

//     try {
//       const res = await axios.post('http://localhost:4400/book/bookings', {
//         busId: selectedBus._id,
//         busName: selectedBus.name,
//         seats: selectedSeats,
//         user,
//       });

//       alert('Booking successful!');
//     } catch (err) {
//       console.error(err);
//       alert('Booking failed.');
//     }
//   };

//   return (
//     <button onClick={handleConfirm} className="confirm-btn">
//       Confirm Booking
//     </button>
//   );
// }

// export default ConfirmBooking;
import axios from 'axios'
function ConfirmBooking({ selectedSeats, selectedBus, user, onConfirm }) {
  const handleConfirm = async () => {
    if (selectedSeats.length === 0) {
      alert('Please select at least one seat.');
      return;
    }

    try {
      const res = await axios.post('http://localhost:4400/api/bookings', {
        busId: selectedBus._id,
        busName: selectedBus.name,
        seats: selectedSeats,
        user,
      });

      alert('Booking successful!');
      onConfirm(selectedSeats); // ✅ update confirmed seats
    } catch (err) {
      console.error(err);
      alert('Booking failed.');
    }
  };

  return (
    <button onClick={handleConfirm} className="confirm-btn">
      Confirm Booking
    </button>
  );
}
 export default ConfirmBooking