import 'dotenv/config';
import dns from 'node:dns';

dns.setDefaultResultOrder('ipv4first');
import express from 'express';
import cors from 'cors';
import {connectDB} from './config/db.js';
import inquiryRoutes from './routes/inquiry.js';

const app=express();

app.use(cors({origin:process.env.CLIENT_URL||'http://localhost:5173'}));
app.use(express.json());

app.get('/api/health',(_,res)=>res.json({status:'ok',service:'Paltu Paira Portfolio API'}));

app.use('/api/inquiries',inquiryRoutes);

const port=Number(process.env.PORT||5000);

connectDB().catch(err=>console.error('MongoDB connection error:',err));

app.listen(port,()=>console.log(`API running on http://localhost:${port}`));