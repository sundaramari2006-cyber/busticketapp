const express = require('express');
const router = express.Router();
const usermodel = require('../models/user');
const bcrypt=require('bcrypt')
const jwt = require('jsonwebtoken');





const config = { secret: "sundar" }; 

router.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  try {
    console.log("req.body", req.body);

    const existingUser = await usermodel.findOne({ email });
    if (existingUser) {
      return res.status(400).send("User already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new usermodel({
      name,
      email,
      password: hashedPassword  // Store hashed password
    });

    await user.save();

    const token = jwt.sign({ id: user._id, name: user.name }, config.secret, {
      expiresIn: '1h'  // Optional: set expiration
    });

    res.status(201).json({ token, user });  // Send both as JSON
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const secretkey = 'sundar';

router.post('/verify', async (req, res) => {
  try {
    console.log("Request Body:", req.body);

    const { token } = req.body;

    if (!token) {
      return res.status(400).send("Token not found");
    }

    const decoded = jwt.verify(token, secretkey);

    if (!decoded || !decoded.id) {
      return res.status(400).send("Invalid token payload");
    }

    const id = decoded.id;
    console.log("Decoded user ID:", id);

    const useridd = await usermodel.findById(id);

    if (!useridd) {
      return res.status(404).send("User not found in database");
    }

    console.log("User found:", useridd);
    res.send({ user: useridd });

  } catch (err) {
    console.error("Error verifying user:", err);
    res.status(500).send({ error: err.message });
  }
});

// POST /signup/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await usermodel.findOne({ email });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).send({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id, name: user.name }, config.secret, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});


module.exports=router;


