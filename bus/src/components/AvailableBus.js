
import React from 'react';
import BusCard from './BusCard';

function AvailableBuses({
  buses,
  selectedBus,
  setSelectedBus,
  selectedSeats,
  setSelectedSeats,
  passengerDetails,
  setPassengerDetails,
}) {
  if (buses.length === 0) return <p>No buses found.</p>;

  return (
    <div className="bus-list-container">
      <h3 className="bus-list-title">Available Buses</h3>
      <div className="bus-list">
      {buses.map((bus, index) => (
        <BusCard
          key={index}
          bus={bus}
          isSelected={selectedBus === bus}
          onSelect={() => {
            setSelectedBus(bus);
            setSelectedSeats([]);
            setPassengerDetails([]);
          }}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          passengerDetails={passengerDetails}
          setPassengerDetails={setPassengerDetails}
        />
      ))}
      </div>
    </div>
  );
}

export default AvailableBuses;

// import React from 'react';
// import BusCard from './BusCard';


// function AvailableBuses({
//   buses,
//   selectedBus,
//   setSelectedBus,
//   selectedSeats,
//   setSelectedSeats,
//   passengerDetails,
//   setPassengerDetails,
// }) {
//   if (buses.length === 0) return <p className="no-buses">No buses found.</p>;

//   return (
//     <div className="bus-list-container">
//       <h3 className="bus-list-title">Available Buses</h3>
//       <div className="bus-list">
//         {buses.map((bus, index) => (
//           <BusCard
//             key={index}
//             bus={bus}
//             isSelected={selectedBus === bus}
//             onSelect={() => {
//               setSelectedBus(bus);
//               setSelectedSeats([]);
//               setPassengerDetails([]);
//             }}
//             selectedSeats={selectedSeats}
//             setSelectedSeats={setSelectedSeats}
//             passengerDetails={passengerDetails}
//             setPassengerDetails={setPassengerDetails}
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default AvailableBuses;
