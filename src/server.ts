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
const privateKeyPath = "/home/rick/ssl/privkey.pem";
const certificatePath = "/home/rick/ssl/fullchain.pem";

if (!fs.existsSync(privateKeyPath) || !fs.existsSync(certificatePath)) {
  console.error("❌ SSL Certificates missing!");
  process.exit(1);
}

const privateKey = fs.readFileSync(privateKeyPath, "utf8");
const certificate = fs.readFileSync(certificatePath, "utf8");
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

// ✅ Discord OAuth Authentication Endpoint
app.post(
  "/discord-auth",
  async (req: Request, res: Response): Promise<void> => {
    try {
      const { code } = req.body;
      if (!code) {
        res.status(400).json({ message: "❌ Missing OAuth code." });
        return;
      }

      // ✅ Exchange code for access token
      const tokenResponse = await axios.post(
        "https://discord.com/api/oauth2/token",
        new URLSearchParams({
          client_id: DISCORD_CLIENT_ID,
          client_secret: DISCORD_CLIENT_SECRET,
          grant_type: "authorization_code",
          code,
          redirect_uri: REDIRECT_URI,
        }),
        { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
      );

      // ✅ Retrieve user info from Discord API
      const userResponse = await axios.get(
        "https://discord.com/api/users/@me",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.data.access_token}`,
          },
        }
      );

      console.log(
        `✅ Discord User Authenticated: ${userResponse.data.username}`
      );

      res.status(200).json(userResponse.data);
    } catch (error) {
      console.error("❌ Discord Authentication Error:", error);
      res.status(500).json({ message: "❌ Discord authentication failed." });
    }
  }
);

// ✅ API Route to Verify Wallet
app.post(
  "/verify-wallet",
  async (req: Request, res: Response): Promise<void> => {
    try {
      console.log("🔹 Received request:", req.body);

      const { userId, discordId, wallet, signature } = req.body;
      if (!userId || !discordId || !wallet || !signature) {
        res.status(400).json({ message: "❌ Missing parameters." });
        return;
      }

      if (userId !== discordId) {
        res.status(400).json({ message: "❌ Mismatched Discord ID." });
        return;
      }

      // ✅ Verify Wallet Signature
      const message = `Verify your wallet for Discord: ${userId}`;
      const recoveredAddress = verifyMessage(message, signature);

      if (recoveredAddress.toLowerCase() !== wallet.toLowerCase()) {
        res.status(400).json({ message: "❌ Invalid signature." });
        return;
      }

      // ✅ Store wallet & Discord ID in MongoDB
      await UserModel.findOneAndUpdate(
        { id: userId },
        { $set: { walletAddress: wallet, discordId: discordId } },
        { upsert: true, new: true }
      );

      console.log(`✅ Wallet verified successfully for Discord user ${userId}`);
      res.status(200).json({ message: "✅ Wallet verified successfully!" });
    } catch (error) {
      console.error("❌ Internal Server Error:", (error as Error).message);
      res.status(500).json({ error: "Internal server error" });
    }
  }
);

// ✅ Start HTTPS Server
https.createServer(credentials, app).listen(PORT, () => {
  console.log(`🚀 Secure API Running on https://api.nme-bot.info:${PORT}`);
});
