import React, { useState, useEffect } from 'react';
import AvailableBuses from './AvailableBus';
// import Payment from './Payment'
import { useNavigate } from 'react-router-dom';

function SearchBus() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');
  const [buses, setBuses] = useState([]);
  const [error, setError] = useState('');
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [passengerDetails, setPassengerDetails] = useState([]);
  const [userName, setUserName] = useState('');
  const navigate = useNavigate();

 
    // selectedSeats.length > 0 && passengerDetails.length > 0 && (
    //        <Payment bus={selectedBus} passengerDetails={passengerDetails} />
    //     )

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user?.name) {
      setUserName(user.name);
    }
  }, []);

  const handleSearch = async () => {
    if (!from || !to || !date) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:4400/buses/api/buses?from=${from}&to=${to}&date=${date}`
      );
      const data = await response.json();
      setBuses(data);
      setError('');
      setSelectedBus(null);
      setSelectedSeats([]);
      setPassengerDetails([]);
    } catch (err) {
      console.error(err);
      setError('Error fetching buses');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('loggedIn');
    navigate('/');
  };
    const handleLogin = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('loggedIn');
    navigate('/');
  };
  const handleSignup = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('loggedIn');
    navigate('/signup');
  };

  return (
    <div className="search-bus-page">
      <nav className="navbar">
        <div className="nav-logo">GoBus</div>
        {/* <ul className="nav-links">
          <li><a href="/bus-selection">Home</a></li>
          <li><a href="/bus-selection">Search Bus</a></li>
        </ul> */}
        <div className="nav-user">
          {userName && <span className="username">Hi, {userName}</span>}
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
          <button className="logout-btn" onClick={handleLogin}>Login</button>
          <button className="logout-btn" onClick={handleSignup}>signup</button>
        </div>
      
      </nav>

      <div className="bus-search-container">
        <h2 className="search-title">Find Available Buses</h2>
        <div className="input-section">
          <input type="text" placeholder="From" value={from} onChange={(e) => setFrom(e.target.value)} />
          <input type="text" placeholder="To" value={to} onChange={(e) => setTo(e.target.value)} />
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
          <button onClick={handleSearch}>Search</button>
        </div>

        {error && <p className="error">{error}</p>}

        <AvailableBuses
          buses={buses}
          selectedBus={selectedBus}
          setSelectedBus={setSelectedBus}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          passengerDetails={passengerDetails}
          setPassengerDetails={setPassengerDetails}
        />
      </div>
    </div>
  );
}

export default SearchBus;

