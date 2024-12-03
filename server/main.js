const express = require("express");
const { json } = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const { injectData, removeData } = require("./injectData.js");
const User = require("./models/userModel.js");

const usersRouter = require("./routes/usersRoute.js");
const postsRouter = require("./routes/postsRoute.js");
const commentsRouter = require("./routes/commentsRoute.js");

dotenv.config();

const uri = process.env.URI;

const app = express();

const PORT = 3000;

mongoose.connect(uri).then(() => {
  console.log("mongo instance connected...");
});

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(json());

removeData();

async function checkCollectionEmpty() {
  try {
    const isCollectionEmpty = (await User.countDocuments()) === 0;

    if (isCollectionEmpty) {
      console.log("The User collection is empty.Injecting data...");
      injectData();
    } else {
      console.log("The User collection has documents.No need to inject data.");
    }
  } catch (error) {
    console.error("Error checking User collection:", error);
  }
}
checkCollectionEmpty();

app.use("/api/users", usersRouter);
app.use("/api/posts", postsRouter);
app.use("/api/comments", commentsRouter);

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
