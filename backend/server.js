import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import authRoutes from "./routes/authRoutes";


dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);


mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("Mongodb conneted"))
.catch(err=>console.log(err));

app.get("/",(req,res)=>{
    res.send("API running");
})

const PORT=5000;

app.listen(PORT, ()=> console.log(`sever running on ${PORT}`));