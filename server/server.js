const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const User = require('./models/User.js'); // Import the User model

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json()); // Parse JSON requests

// Connect to MongoDB
// Connect to MongoDB (Updated)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));



// Test route
app.get('/', (req, res) => {
  res.send('Backend is running!');
});

// Register User Route
app.post('/api/register', async (req, res) => {
    try {
      const { username, email, password } = req.body;
  
      // Check if user already exists
      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      // Create a new user
      user = new User({ username, email, password });
      await user.save();
  
      res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
      console.error('Error in /api/register:', error);
      res.status(500).json({ message: 'Server error' });
    }
  });


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
