const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

// Database connection
mongoose
  .connect("mongodb://localhost:27017/e-commerce")
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.error("MongoDB connection error:", error));

// Routes
app.use("/api/products", require("./routes/productRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
