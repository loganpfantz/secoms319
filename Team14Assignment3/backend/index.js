const express = require("express");
const cors = require('cors');
const app = express();
const bodyParser = require("body-parser");
const connectToDb = require('./dataschema'); // Import the connectToDb function

// Enable CORS for all routes
app.use(cors());

app.use(bodyParser.json());
app.use("/images", express.static("images"));

// Establish MongoDB connection then start server
connectToDb().then(db => {
    app.use((req, res, next) => {
        req.db = db;
        next();
    });

    // Get all items
    app.get("/api/get", async (req, res) => {
        try {
          const collection = req.db.collection("fakestore_catalog");
          const result = await collection.find({}).toArray();
          res.send(result);
        } catch (err) {
          console.error(err);
          res.status(500).send("Error retrieving data");
        }
      });
      
      // Get item based on id
      app.get("/api/getFromId/:id", async (req, res) => {
        try {
          const id = parseInt(req.params.id);
          const collection = req.db.collection("fakestore_catalog");
          const result = await collection.findOne({ id: id });
          if (result) {
            res.send(result);
          } else {
            res.status(404).send('Item not found');
          }
        } catch (err) {
          console.error(err);
          res.status(500).send("Error retrieving data");
        }
      });
      
      
      // Create one item
      app.post("/api/create", async (req, res) => {
        try {
          const collection = req.db.collection("fakestore_catalog");
          const result = await collection.insertOne(req.body);
          res.send(result);
        } catch (err) {
          console.error(err);
          res.status(500).send("Error creating data");
        }
      });
      
      // Delete item based on id
      app.delete("/api/delete/:id", async (req, res) => {
        try {
          const id = req.params.id;
          const collection = req.db.collection("fakestore_catalog");
          const result = await collection.deleteOne({ id: id });
          res.send(result);
        } catch (err) {
          console.error(err);
          res.status(500).send("Error deleting data");
        }
      });
      

      app.put("/api/update", async (req, res) => {
        try {
          const id = req.body.id;
          const updateData = { ...req.body };
          delete updateData.id;
          const collection = req.db.collection("fakestore_catalog");
          const result = await collection.updateOne({ id: id }, { $set: updateData });
          res.send(result);
        } catch (err) {
          console.error(err);
          res.status(500).send("Error updating data");
        }
      });
      
      app.post("/api/like/:id", async (req, res) => {
        try {
          const id = req.params.id;
          const collection = req.db.collection("fakestore_catalog");
          const result = await collection.updateOne({ id: id }, { $inc: { likes: 1 } });
          res.send(result);
        } catch (err) {
          console.error(err);
          res.status(500).send("Error updating data");
        }
      });
      

    const port = 8081;
    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    });
}).catch(err => {
    console.error('Failed to start the server:', err);
});

