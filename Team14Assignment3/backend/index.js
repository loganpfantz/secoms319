const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const connectToDb = require("./dataschema"); // Import the connectToDb function
const { ObjectId } = require("mongodb");

const app = express();

// Enable CORS for all routes
app.use(cors());
app.use(bodyParser.json());
app.use("/images", express.static("images"));

// Establish MongoDB connection then start server
connectToDb()
  .then((db) => {
    app.use((req, res, next) => {
      req.db = db;
      next();
    });

    app.get("/api/get", async (req, res) => {
      try {
        const collection = req.db.collection("fakestore_catalog");
        const result = await collection.find({}).toArray();
        console.log("Backend Result:", result);
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
          res.status(404).send("Item not found");
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

        // Find the maximum existing ID
        const maxIdResult = await collection
          .find()
          .sort({ id: -1 })
          .limit(1)
          .toArray();
        const maxId = maxIdResult.length > 0 ? maxIdResult[0].id : 0;

        // Increment the ID for the new item
        const newId = maxId + 1;

        // Add the ID to the new product data
        const newProduct = { ...req.body, id: newId };

        // Insert the new product
        await collection.insertOne(newProduct);

        // Fetch the updated list of products after creating a new product
        const updatedProducts = await collection.find({}).toArray();

        res.send(updatedProducts);
      } catch (err) {
        console.error(err);
        res.status(500).send("Error creating data");
      }
    });

    // Delete item based on id
    app.delete("/api/delete/:id", async (req, res) => {
      try {
        const id = parseInt(req.params.id);
        console.log("Deleting product with ID:", id);
        const collection = req.db.collection("fakestore_catalog");

        const result = await collection.deleteOne({ id: id });

        if (result.deletedCount === 1) {
          // Document was deleted successfully
          res.status(200).send({ message: "Product deleted successfully!" });
        } else {
          // No document matched the provided id
          res.status(404).send({ message: "Product not found", id: id });
        }
      } catch (err) {
        console.error(err);
        res
          .status(500)
          .send({ message: "Error deleting data", id: req.params.id });
      }
    });

// Update product price route
app.put('/api/updatePrice', async (req, res) => {
  const { id, newPrice } = req.body;

  try {
    const collection = req.db.collection('fakestore_catalog');

    // Update the price in the MongoDB collection
    const result = await collection.updateOne(
      { id: parseInt(id) }, // Convert id to a number if it's a string
      { $set: { price: parseFloat(newPrice) } } // Set the new price
    );

    if (result.matchedCount === 1) {
      // Document was found and updated successfully
      const updatedProducts = await collection.find({}).toArray();
      res.json(updatedProducts);
    } else {
      // No document matched the provided id
      res.status(404).send('Product not found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('Error updating the price');
  }
});



    // Like an item
    app.post("/api/like/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const collection = req.db.collection("fakestore_catalog");
        const result = await collection.updateOne(
          { id: id },
          { $inc: { likes: 1 } }
        );
        res.send(result);
      } catch (err) {
        console.error(err);
        res.status(500).send("Error updating data");
      }
    });

    // Error handling
    const errorHandler = (err, req, res, next) => {
      console.error(err);
      res.status(500).send("Internal Server Error");
    };

    app.use(errorHandler);

    // Handle shutdown
    const gracefulShutdown = async () => {
      try {
        await db.close();
        console.log("Closed MongoDB connection");
        process.exit(0);
      } catch (err) {
        console.error("Error closing MongoDB connection:", err);
        process.exit(1);
      }
    };

    process.on("SIGINT", gracefulShutdown);
    process.on("SIGTERM", gracefulShutdown);

    const port = 8081;
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch((err) => {
    console.error("Failed to start the server:", err);
  });
