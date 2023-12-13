const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

app.use(cors({ origin: 'http://localhost:3000', credentials: true })); // Allow requests from your frontend domain

app.use(bodyParser.json());

const port = "8081";

const { MongoClient } = require("mongodb");

// Mongo
const url = "mongodb://127.0.0.1:27017";
const dbName = "FinalProject";
const client = new MongoClient(url);

// Establish MongoDB connection
async function connectDB() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Could not connect to MongoDB", error);
  }
}

connectDB();

// Use cookie-parser middleware to parse cookies
app.use(cookieParser());

// Use express-session middleware to manage sessions
app.use(
  session({
    secret: 'your-secret-key', // Change this to a secret key for session encryption
    resave: false,
    saveUninitialized: true,
  })
);

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
  if (req.session.user) {
    // If the user is authenticated, proceed to the next middleware or route
    next();
  } else {
    // If not authenticated, redirect to the login page or send an error response
    res.status(401).json({ status: 401, error: 'Unauthorized' });
  }
};

// User view route
app.get("/userView", isAuthenticated, (req, res) => {
  // Access user details from the session
  const user = req.session.user;
  
  // Render the user view with user details
  res.status(200).json({ status: 200, user });
});

app.get("/listGames", async (req, res) => {
  try {
    const query = {};
    const results = await client.db(dbName).collection("Video Games").find(query).limit(100).toArray();
    res.status(200).send(results);
  } catch (error) {
    console.error("Error fetching games", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/game/:id", async (req, res) => {
  try {
    const gameId = parseInt(req.params.id); // Convert string to Number

    const query = { games: { $elemMatch: { id: gameId } } };
    const results = await client.db(dbName).collection("Video Games").findOne(query, { projection: { "games.$": 1 } });

    if (!results) {
      res.status(404).send("Game not found");
    } else {
      const game = results.games[0];
      res.status(200).send(game);
    }
  } catch (error) {
    console.error("Error fetching game", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/listConsoles", async (req, res) => {
  try {
    const query = {};
    const results = await client.db(dbName).collection("Consoles").find(query).limit(100).toArray();
    res.status(200).send(results);
  } catch (error) {
    console.error("Error fetching consoles", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/console/:id", async (req, res) => {
  try {
    const consoleId = parseInt(req.params.id); // Convert string to Number

    const query = { consoles: { $elemMatch: { id: consoleId } } };
    const results = await client.db(dbName).collection("Consoles").findOne(query, { projection: { "consoles.$": 1 } });

    if (!results) {
      res.status(404).send("console not found");
    } else {
      const console = results.consoles[0];
      res.status(200).send(console);
    }
  } catch (error) {
    console.error("Error fetching console", error);
    res.status(500).send("Internal Server Error");
  }
});

// REGISTER
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Get the current user count to generate the next user ID
    const userCollection = client.db(dbName).collection("Users");
    const count = await userCollection.countDocuments();

    // Save user to the "Users" collection with a custom ID
    const result = await userCollection.insertOne({ id: count + 1, username, password });

    const userId = result.insertedId;

    res.status(201).json({ message: 'User registered successfully', userId });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// LOG IN
app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if username and password are provided
    if (!username || !password) {
      return res.status(400).json({ status: 400, error: 'Username and password are required' });
    }

    // Find user by username in the "Users" collection
    const userCollection = client.db(dbName).collection("Users");
    const user = await userCollection.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ status: 401, error: 'Invalid credentials' });
    }

    // Store user information in the session
    req.session.user = { id: user.id, username: user.username };

    // Return success status if login is successful
    res.status(200).json({ status: 200, message: 'Login successful', user });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
});

// GET route for getting user's username by ID
app.get("/getUser/:id", async (req, res) => {
  try {
    const userId = parseInt(req.params.id); // Convert string to Number

    // Find user by ID in the "Users" collection
    const userCollection = client.db(dbName).collection("Users");
    const user = await userCollection.findOne({ id: userId });

    if (user) {
      res.json({ username: user.username });
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error during getUser:", error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
});


// PUT route for updating a username by ID
app.put('/updateUsername/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id); // Convert string to Number
    const newUsername = req.body.username;

    // Find user by ID in the "Users" collection and update the username
    const userCollection = client.db(dbName).collection("Users");
    const updatedUser = await userCollection.findOneAndUpdate(
      { id: userId },
      { $set: { username: newUsername } },
      { new: true }
    );

    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error during updateUsername:", error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
});


// DELETE route for deleting a user by ID
app.delete('/deleteUser/:id', async (req, res) => {
  try {
    const userId = parseInt(req.params.id); // Convert string to Number

    // Find and delete the user with the specified ID in the "Users" collection
    const userCollection = client.db(dbName).collection("Users");
    const deletedUser = await userCollection.findOneAndDelete({ id: userId });

    if (deletedUser) {
      res.send('User deleted successfully');
    } else {
      res.status(404).send("User not found");
    }
  } catch (error) {
    console.error("Error during deleteUser:", error);
    res.status(500).json({ status: 500, error: 'Internal Server Error' });
  }
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
