require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFoundMiddleware = require("./middleware/not-found");
const products = require("./routes/products");

// middleware
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/v1/products/", products);

app.use(errorHandlerMiddleware);
app.use(notFoundMiddleware);
//server
const port = process.env.PORT || 3000;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server listening on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

startServer();
