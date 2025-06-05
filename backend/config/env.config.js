const dotenv = require("dotenv");
dotenv.config();

const requiredVars = ["DB_HOST", "DB_USER", "DB_PASSWORD", "DB_NAME", "JWT_SECRET"];

requiredVars.forEach((key) => {
  if (!process.env[key]) {
    console.warn(`⚠️ Missing required env variable: ${key}`);
  }
});

module.exports = process.env;
