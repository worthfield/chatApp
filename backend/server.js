import express from "express";
import cookieParser from "cookie-parser";
import cors from 'cors'
import path from 'path'
import config from "./config/config.js";
import dbConnection from "./database.js";
import {app,server} from './socket/socket.js'
import authRoutes from "./routes/auth.route.js";
import msgRoutes from "./routes/message.route.js";
import userRoutes from "./routes/user.route.js";

const __dirname = path.resolve()

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true }))
app.use("/api/auth", authRoutes);
app.use("/api/messages", msgRoutes);
app.use("/api/users", userRoutes);
app.use(express.static(path.join(__dirname,"/frontend/dist")))
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,"frontend","dist","index.html"))
})
server.listen(config.PORT, () => {
  console.log("Server is running on port " + config.PORT);
  dbConnection();
});
app.use((error, req, res, next) => {
  const errorStatus = error.statusCode || 500;
  const errorMessage = error.message || "internal server error";
  res.status(errorStatus).json({
    success: false,
    statusCode: errorStatus,
    message: errorMessage,
  });
});
