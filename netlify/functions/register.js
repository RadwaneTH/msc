const mongoose = require('mongoose');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const User = require('../../server/models/User.js'); // Adjust path for the model

dotenv.config();

// Use crypto fallback for bcrypt
bcrypt.setRandomFallback(require('crypto').randomBytes);

let connection = null; // Store the DB connection for reuse

const connectToDB = async () => {
  if (!connection) {
    connection = mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
  }
  return connection;
};

exports.handler = async (event) => {
  try {
    if (event.httpMethod !== 'POST') {
      return { 
        statusCode: 405, 
        headers: { "Access-Control-Allow-Origin": "*" }, 
        body: JSON.stringify({ message: 'Method Not Allowed' }) 
      };
    }

    await connectToDB();

    const { username, email, password } = JSON.parse(event.body);

    let user = await User.findOne({ email });
    if (user) {
      return { 
        statusCode: 400, 
        headers: { "Access-Control-Allow-Origin": "*" }, 
        body: JSON.stringify({ message: 'User already exists' }) 
      };
    }

    user = new User({ username, email, password });
    await user.save();

    return { 
      statusCode: 201, 
      headers: { "Access-Control-Allow-Origin": "*" }, 
      body: JSON.stringify({ message: 'User registered successfully!' }) 
    };

  } catch (error) {
    console.error('Error in /api/register:', error);
    return { 
      statusCode: 500, 
      headers: { "Access-Control-Allow-Origin": "*" }, 
      body: JSON.stringify({ message: 'Server error', error: error.message }) 
    };
  }
};
