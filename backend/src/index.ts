import express from 'express';
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import mongoose from 'mongoose';
import authRoutes from "./routes/auth.route"

// configuration
dotenv.config();
const app = express();
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true
}));

app.use(express.json());

app.use(helmet());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));

app.get("/deploy-success", (req, res) => {
  res.status(200).json({ message: "Deployment successful 🚀" });
});

const PORT = Number(process.env.PORT) || 8001;
app.listen(PORT,"0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});

app.use("/api/auth", authRoutes)
// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
