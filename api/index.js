const express=require('express');
const cors=require('cors');
require('dotenv').config();
const Transaction=require('./models/Transaction.js');
const { default: mongoose } = require('mongoose');
const app=express();

app.use(cors());
app.use(express.json());
app.get('/api/test', (req,res)=>{
    res.json('test ok');
});

app.post('/api/transaction',async (req,res)=>{
    // console.log(process.env.MONGO_URL)
    await mongoose.connect(process.env.MONGO_URL);
    const {name,description,datetime}=req.body;
    // const transaction = await Transaction.create({name,description,datetime});
    res.json(req.body);
});

app.listen(4000);

//mongodb://localhost:27017
//6wY678V2kOW2IILw