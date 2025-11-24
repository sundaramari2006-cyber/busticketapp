<h1>🚌 <b>Bus Ticket Booking System</b></h1>

<p>
A full-stack <b>Bus Ticket Booking Application</b> built using <b>React, Node.js, Express, and MongoDB</b>.<br>
This system allows users to <b>search buses</b>, <b>view seat layouts</b> (upper/lower berths), 
<b>select seats</b>, <b>enter passenger details</b>, <b>make payment</b>, and <b>download tickets</b>.<br>
All bookings are saved in the backend and stored as <b>booked seats</b>, which appear <b>black on refresh</b>.
</p>

<hr>

<h2>🌟 <b>Features</b></h2>

<h3>🔍 <b>Bus Search</b></h3>
<ul>
    <li><b>Search buses by:</b></li>
    <ul>
        <li>From</li>
        <li>To</li>
        <li>Date</li>
    </ul>
    <li>Buses are fetched from backend API.</li>
</ul>

<h3>🪑 <b>Seat Selection</b></h3>
<ul>
    <li>12 upper berth + 12 lower berth (Redbus-style UI)</li>
    <li><b>Seat color meaning:</b></li>
    <ul>
        <li>🟢 <b>Available</b></li>
        <li>🔴 <b>Selected</b></li>
        <li>⚫ <b>Booked</b> (saved in DB)</li>
    </ul>
    <li>Click to select or unselect seats.</li>
</ul>

<h3>👤 <b>Passenger Details</b></h3>
<ul>
    <li>Enter passenger name, age, gender, contact, etc.</li>
    <li>Selected seats and passenger info stored in backend.</li>
</ul>

<h3>💳 <b>Payment Page</b></h3>
<ul>
    <li>Simple payment form (UPI / Debit Card / Cash on Delivery - dummy)</li>
    <li>After payment → seat becomes <b>booked</b>.</li>
</ul>

<h3>🧾 <b>PDF Ticket Download</b></h3>
<ul>
    <li>Generate and download ticket containing:</li>
    <ul>
        <li><b>Bus Name</b></li>
        <li><b>From & To</b></li>
        <li><b>Selected Seats</b></li>
        <li><b>Fare</b></li>
        <li><b>Passenger Details</b></li>
    </ul>
</ul>

<h3>📜 <b>Booking History</b></h3>
<ul>
    <li>Shows all previous bookings for a user.</li>
    <li>History fetched from backend using email.</li>
</ul>

<h3>🛠 <b>Backend Features</b></h3>
<ul>
    <li>Built using <b>Node.js + Express</b></li>
    <li><b>MongoDB Models:</b></li>
    <ul>
        <li>User</li>
        <li>Bus</li>
        <li>Booking</li>
    </ul>
    <li><b>Saves data:</b></li>
    <ul>
        <li>Booked seats</li>
        <li>Bus information</li>
        <li>User's booking history</li>
    </ul>
</ul>

<hr>

<h2>🧩 <b>Tech Stack</b></h2>

<h3><b>Frontend</b></h3>
<ul>
    <li>React.js</li>
    <li>React Router</li>
    <li>Axios</li>
    <li>CSS / Tailwind</li>
</ul>

<h3><b>Backend</b></h3>
<ul>
    <li>Node.js</li>
    <li>Express.js</li>
    <li>MongoDB (Mongoose)</li>
    <li>JWT Authentication</li>
</ul>

<hr>

<h2>📸 <b>Screenshots</b></h2>

<ul>
    <li><b>SignUp Page</b></li>
  <li><b>Login Page Page</b></li>
    <li><b>Home Page</b></li>
    <li><b>Bus Search Page</b></li>
    <li><b>Seat Selection</b></li>
    <li><b>Passenger Form</b></li>
    <li><b>Payment Page</b></li>
    <li><b>PDF Ticket</b></li>
    <li><b>Booking History</b></li>
</ul>

<hr>

<p><b>Developed by:</b> Sundaramari S</p>


