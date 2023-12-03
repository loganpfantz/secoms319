var express = require("express");
var cors = require("cors");
var app = express();
var bodyParser = require("body-parser");
app.use(cors());
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

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
