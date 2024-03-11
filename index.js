import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.js";
import path from "path";
import videoRoutes from "./routes/video.js";
import commentsRoutes from "./routes/comments.js"
const app = express();
app.use(cors());
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use("/uploads", express.static(path.join("uploads")));
dotenv.config()
app.get("/", (req, res) => {
  res.send("hello");
});
app.use(bodyParser.json());
app.use("/user", userRoutes);
app.use("/video", videoRoutes);
app.use("/comment", commentsRoutes);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Running on the PORT ${PORT}`);
});
const DB_URL = process.env.CONNECTION_URL;
mongoose
  .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB database connected");
  })
  .catch((error) => {
    console.log(error);
  });


//mM7IxqWf5QqX9E5P