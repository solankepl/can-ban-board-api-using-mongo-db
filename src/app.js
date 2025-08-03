/**
 * File: index.js
 * Description: A complete Node.js API server using Express.js and Mongoose for a MongoDB database.
 *
 * To run this code:
 * 1. Make sure you have Node.js and npm installed.
 * 2. Initialize a new Node.js project: `npm init -y`
 * 3. Install required packages: `npm install express mongoose dotenv`
 * 4. Create a `.env` file in the same directory and add your MongoDB connection string.
 * See the example .env file below.
 * 5. Run the server: `node index.js`
 */

//for first tiem we need crate the collection manuallyin db or you can run the below command on cmd promt
//node src/db/task.tabel.js

// =======================================================================
// === 1. Imports and Configuration
// =======================================================================
const express = require('express');
const connectDB = require('./db/conn');
const mongoose = require('mongoose');
const tasksRouter = require('./routers/tasks.routers');
require('dotenv').config(); // Load environment variables from .env file
const app = express();

const PORT = process.env.PORT || 5000;
//app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
console.log('MONGO_URI:', process.env.MONGO_URI);
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));
});

// Middleware to parse JSON bodies from incoming requests
app.use(express.json());
app.use(tasksRouter); // Mounts all /api/tasks routes