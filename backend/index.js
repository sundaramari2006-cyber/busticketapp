// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());


const buses=require('./routes/Buses')
const users=require('./routes/User')


app.use('/buses',buses)
app.use('/signup',users)

mongoose.connect('mongodb://localhost:27017/buses')
  .then(() => {
    console.log("✅ MongoDB Connected");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });




// Start server
app.listen(4400, () => {
  console.log('🚀 Server running at http://localhost:4400');
});
