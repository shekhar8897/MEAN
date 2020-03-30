const express=require('express')
const bodyParser=require('body-parser');
const mongoose=require('mongoose');
const Post=require('./models/post');

const app=express();


mongoose.connect('mongodb+srv://shekharMEAN:LAn9ebVH636fkjFb@mymean-qyarn.mongodb.net/myMEAN?retryWrites=true&w=majority')
    .then(()=>{
        console.log('connected to database');
    })
    .catch(()=>{
        console.log('connection failed')
    });

//LAn9ebVH636fkjFb

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
    //const post=req.body;

    const post=new Post({
        title:req.body.title,
        content:req.body.content,
    });
    console.log(post);
    post.save();
    res.status(201).json({
        message:'post added successfully',
    })
});

app.get('/api/posts',(req,res,next)=>{
    // const posts=[
    //     {
    //         id:'1',
    //         title:'one',
    //         content:'This is the first one '
    //     },
    //     {
    //         id:'2',
    //         title:'two',
    //         content:'This is the second one'
    //     },
    //     {
    //         id:'3',
    //         title:'three',
    //         content:'this is the third one'
    //     }
    // ];
    Post.find()
    .then((documents)=>{
        console.log(documents);
        res.status(200).json({
            message:'Post fetched successfully',
            posts:documents
        });
    })
    .catch(()=>{
        console.log('error');
    })

   
});

app.delete('/api/posts/:id',(req,res,next)=>{
    //console.log(req.params.id);
    Post.deleteOne({_id:req.params.id})
        .then((result)=>{
            console.log(result);
            res.status(200).json({message:'deleted successfully'});
        })
    
})

module.exports=app;