const express =require("express");
const app=express();
const path=require("path");//first require path

const port =8080;

app.set("view engine","ejs");  //to make a template
app.set("views",path.join(__dirname,"/views"));  //to give path for the ejs

app.get("/",(req,res)=>{
    res.render("home")
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})

app.get("/hello",(req,res)=>{
    res.send("hello Ganesh shinde");
})



app.get("/Search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("you not researched for query");//query if not searched
    }
    res.send(`search result for ${q} result`);//output for some query
})

// app.get("/",(req,res)=>{
//     res.send("hello");
// })