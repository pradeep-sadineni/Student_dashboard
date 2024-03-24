const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

// Load environment variables from .env file
dotenv.config();

module.exports.createSecretToken = (id) => {
  // Check if TOKEN_KEY is available in environment variables
  if (!process.env.TOKEN_KEY) {
    throw new Error("TOKEN_KEY is missing in environment variables.");
  }

  // Use TOKEN_KEY for signing JWT token
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
};
