// dataschema.js
const { MongoClient } = require("mongodb");

// MongoDB connection URL and Database Name
const url = "mongodb://127.0.0.1:27017";
const dbName = "reactdata";

// Create a new MongoClient
const client = new MongoClient(url);

// Function to connect to the database
const connectToDb = async () => {
    try {
        await client.connect();
        console.log('Connected to MongoDB');
        return client.db(dbName);
    } catch (err) {
        console.error('Failed to connect to MongoDB:', err);
        process.exit(1);
    }
};

module.exports = connectToDb;
