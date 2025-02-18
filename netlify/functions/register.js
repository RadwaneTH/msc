const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('./User.js'); // Ensure the User model is in the same directory

dotenv.config();

let connection = null; // Store the DB connection for reuse

// Function to connect to MongoDB
const connectToDB = async () => {
  if (!connection) {
    try {
      connection = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('✅ MongoDB connected');
    } catch (err) {
      console.error('❌ MongoDB connection error:', err);
      throw new Error('Database connection failed');
    }
  }
  return connection;
};

// Register function
exports.handler = async (event) => {
  try {
    // Allow only POST requests
    if (event.httpMethod !== 'POST') {
      return { 
        statusCode: 405, 
        headers: { "Access-Control-Allow-Origin": "*" }, 
        body: JSON.stringify({ message: 'Method Not Allowed' }) 
      };
    }

    await connectToDB(); // Ensure DB connection is established

    const { username, email, password } = JSON.parse(event.body);

    // Check if user already exists
    let user = await User.findOne({ email });
    if (user) {
      return { 
        statusCode: 400, 
        headers: { "Access-Control-Allow-Origin": "*" }, 
        body: JSON.stringify({ message: 'User already exists' }) 
      };
    }

    // Hash password before saving
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create and save new user
    user = new User({ username, email, password: hashedPassword });
    await user.save();

    return { 
      statusCode: 201, 
      headers: { "Access-Control-Allow-Origin": "*" }, 
      body: JSON.stringify({ message: 'User registered successfully!' }) 
    };

  } catch (error) {
    console.error('❌ Error in /api/register:', error);
    return { 
      statusCode: 500, 
      headers: { "Access-Control-Allow-Origin": "*" }, 
      body: JSON.stringify({ message: 'Server error', error: error.toString() }) 
    };
  }
};
