import express from "express";
import dotenv from "dotenv";
import connectMongodb from "./db/connectMongodb.js";

import authRoutes from "./routes/authroutes.js";

dotenv.config();
const app = express();

const port = process.env.PORT || 5000

app.use("/api/auth", authRoutes);


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  connectMongodb()
  
});
