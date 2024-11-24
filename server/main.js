import mongoose from "mongoose";
import express from "express";

const app = express();
app.use(express.json());

// Database
const database = () => {
  const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    mongoose.connect(
      "mongodb+srv://ariel:HMSow2P4cLTb7bmw@mocksocialmedia.bgffa.mongodb.net/",
      connectionParams
    );
    console.log("Database connected succesfully");
  } catch (error) {
    console.log(error);
    console.log("Database connection failed");
  }
};

database();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
