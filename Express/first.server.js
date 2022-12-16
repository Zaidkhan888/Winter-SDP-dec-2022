const express = require("express")
const app = express();
const  Todo = require("./schema")
app.use(express.json())
const mongoose = require("mongoose")
mongoose.set('strictQuery', true);
mongoose.connect("mongodb://0.0.0.0:27017/newdb" ,(error)=>{
    if(error){
        console.log("MongoDB connection error: " , error);
    }
    console.log("MongoDB connected Sucesully");
})

// app.get("/",(req,res)=>{
//     res.status(201).send("hello home page")
// })
// app.get("/About",(req,res)=>{
//     res.status(201).send("hello About")
// })
// app.get("/Contact",(req,res)=>{
//     res.status(201).send("hello Contact")
// })
// app.get("/File",(req,res)=>{
//     res.status(201).send("hello file!!")
// })
app.get("/todos",(req,res)=>{

    return Todo.find()
    .then(data =>{
        res.status(201).json({
            todo:data
        })
    })
    .catch(error=>{
        res.status(422).json({
            error:error.toString()
        })
    })


    
})
app.post("/todos",(req,res)=>{


    const newTodo = req.body;
   

    return Promise.resolve()
    .then(()=>{
        if(!newTodo.title)
                throw Error("title not found")
        return Todo.create(newTodo)
    })

    .then(data=>{
        res.status(200).json({ 
           message : "Todo Created!!" ,
           todo : data
        })

    })
    .catch(error=>{
        res.status(422).json({
            error : error.toString()
        })
    })



})

app.listen(8000 , ()=>{ 
    console.log("app is listening at the port of 8000")
    
})