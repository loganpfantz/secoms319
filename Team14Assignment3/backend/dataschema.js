const { MongoClient } = require("mongodb");

// MongoDB connection URL and Database Name
const url = "mongodb://127.0.0.1:27017";
const dbName = "reactdata";

// Create a new MongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to connect to the database
const connectToDb = async () => {
  try {
    // Connect to the MongoDB server
    await client.connect();

    // Log a message indicating a successful connection
    console.log('Connected to MongoDB');

    // Return the reference to the connected database
    return client.db(dbName);
  } catch (err) {
    // Log an error message and exit the process if connection fails
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  }
};

module.exports = connectToDb;
