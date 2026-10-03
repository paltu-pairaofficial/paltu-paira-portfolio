// import {Request,Response} from 'express';import Inquiry from '../models/Inquiry.js';
// export async function createInquiry(req:Request,res:Response){try{const {name,email,subject,message}=req.body;if(!name||!email||!message)return res.status(400).json({message:'Name, email and message are required.'});if(process.env.MONGODB_URI){const inquiry=await Inquiry.create({name,email,subject,message});return res.status(201).json({message:'Inquiry received.',id:inquiry.id});}return res.status(201).json({message:'Inquiry received. Add MONGODB_URI to persist submissions.'});}catch(error){console.error(error);res.status(500).json({message:'Unable to submit inquiry.'})}}
import {Request,Response} from 'express';
import Inquiry from '../models/Inquiry.js';

export async function createInquiry(req:Request,res:Response){
  try{
    const {name,email,subject,message}=req.body;

    if(!name||!email||!message)
      return res.status(400).json({message:'Name, email and message are required.'});

    if(process.env.MONGODB_URI){
      const inquiry=await Inquiry.create({name,email,subject,message});
      return res.status(201).json({message:'Inquiry received.',id:inquiry.id});
    }

    return res.status(201).json({message:'Inquiry received. Add MONGODB_URI to persist submissions.'});
  }catch(error){
    console.error(error);
    res.status(500).json({message:'Unable to submit inquiry.'})
  }
}