const express=require('express')
const bodyParser=require('body-parser');
const app=express();
const mongoose=require('mongoose');
const cors=require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// cors method used to get the data in angular app via node api

// app.use((req,res,next)=>{
//     res.setHeader("Access-Control-Allow-Origin","*");
//     res.setHeader("Accedd-Control-Allow-Headers","Origin,X-Requested-With,Content-Type,Accept");
//     res.setHeader("Access-Control-Allow-Methods","GET,POST,PATCH,DELETE,OPTIONS");

//     next();
// })

app.use(cors());


app.post("/api/posts",(req,res,next)=>{
    const post=req.body;
    console.log(post);

    res.status(201).json({
        message:'post added successfully',
    })
});

app.get('/api/posts',(req,res,next)=>{
    const posts=[
        {
            id:'1',
            title:'one',
            content:'This is the first one '
        },
        {
            id:'2',
            title:'two',
            content:'This is the second one'
        },
        {
            id:'3',
            title:'three',
            content:'this is the third one'
        }
    ];

    res.status(200).json({
        message:'Post fetched successfully',
        posts:posts
    });
});

module.exports=app;