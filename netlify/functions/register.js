const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("../../server/models/User.js"); // Adjust path for the model
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

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
    if (event.httpMethod !== "POST") {
      return {
        statusCode: 405,
        body: JSON.stringify({ message: "Method Not Allowed" }),
      };
    }

    await connectToDB();

    const { username, lastname, email, password } = JSON.parse(event.body);

    let user = await User.findOne({ email });
    if (user) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Cet email est déjà utilisé." }),
      };
    }

    // Generate verification token
    const token = jwt.sign({ email }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // Store user as unverified
    user = new User({
      username,
      lastname,
      email,
      password, // Consider hashing the password before saving
      verified: false,
      token,
    });
    await user.save();

    // Create verification link
    const confirmationLink = `https://in-deep.netlify.app/verify?token=${token}`;

    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Send confirmation email
    await transporter.sendMail({
      from: `"Votre Application" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Confirmez votre email",
      text: `Cliquez sur ce lien pour vérifier votre email : ${confirmationLink}`,
    });

    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Inscription réussie ! Vérifiez votre email pour confirmer.",
      }),
    };
  } catch (error) {
    console.error("Erreur dans /api/register:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Erreur serveur" }),
    };
  }
};
