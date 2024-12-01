const express = require("express");
const { json } = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const usersRouter = require("./routes/usersRoute.js");
const postsRouter = require("./routes/postsRoute.js");
const commentsRouter = require("./routes/commentsRoute.js");

dotenv.config();

const uri = process.env.URI;

const app = express();

const PORT = 3000;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("mongo instance connected...");
  });

app.use(cors({credentials:true}));
app.use(json());

//app.use('/', logger);

app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/comments", commentsRouter);

app.get("/", (req, res) => {
  res.send("Hello World");
  // res.render("index.html");
});

app.get("/api/status", (req, res) => {
  res.send({
    message: "Server is UP",
  });
});

app.use((err, req, res, next) => {
  if (err.name === "ValidationError") {
    return res.status(400).json({ message: err.message });
  }
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
