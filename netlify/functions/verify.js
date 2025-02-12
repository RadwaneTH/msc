const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../../server/models/User.js"); // Adjust the path for the model
const jwt = require("jsonwebtoken");

dotenv.config();

let connection = null; // Store the DB connection for reuse

const connectToDB = async () => {
  if (!connection) {
    connection = mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log("MongoDB connected"))
      .catch((err) => console.error("MongoDB connection error:", err));
  }
  return connection;
};

exports.handler = async (event) => {
  try {
    // Get token from the query string (URL)
    const { token } = event.queryStringParameters;
    if (!token) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Token manquant" }),
      };
    }

    await connectToDB();

    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const email = decoded.email;

    // Find the user in the database using the email from the decoded token
    let user = await User.findOne({ email });
    if (!user) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Utilisateur introuvable" }),
      };
    }

    // Check if the user is already verified
    if (user.verified) {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: "Votre email est déjà vérifié." }),
      };
    }

    // Mark the user as verified
    user.verified = true;
    await user.save();

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Votre email a été vérifié avec succès !" }),
    };
  } catch (error) {
    console.error("Erreur dans /api/verify:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Erreur serveur" }),
    };
  }
};
