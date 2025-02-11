import https from "https";
import fs from "fs";
import express, { Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { verifyMessage } from "ethers";
import dotenv from "dotenv";
import axios from "axios";
import UserModel from "./database/models/UserModel";

dotenv.config();

const app = express();
const PORT = 3001;
const DISCORD_CLIENT_ID = process.env.DISCORD_CLIENT_ID!;
const DISCORD_CLIENT_SECRET = process.env.DISCORD_CLIENT_SECRET!;
const REDIRECT_URI = process.env.REDIRECT_URL!;

// ✅ Load SSL Certificates
const privateKey = fs.readFileSync(
  "/etc/letsencrypt/live/api.nme-bot.info/privkey.pem",
  "utf8"
);
const certificate = fs.readFileSync(
  "/etc/letsencrypt/live/api.nme-bot.info/fullchain.pem",
  "utf8"
);
const credentials = { key: privateKey, cert: certificate };

// ✅ Middleware
app.use(
  cors({
    origin: "https://discord.nme-bot.info",
    credentials: true,
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.options("*", (req, res) => {
  res.header("Access-Control-Allow-Origin", "https://discord.nme-bot.info");
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.status(200).send();
});

app.use(bodyParser.json());

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("✅ Database Connected"))
  .catch((err) => console.error("❌ Database Connection Error:", err));

// ✅ Start HTTPS Server
https.createServer(credentials, app).listen(PORT, () => {
  console.log(`🚀 Secure API Running on https://api.nme-bot.info:${PORT}`);
});
