const express =require("express");
const app=express();
const path=require("path");//first require path
//path is package

const port =3000;

app.set("view engine","ejs");  //to make a template
app.set("views",path.join(__dirname,"/views"));  //to give path for the ejs

app.get("/",(req,res)=>{
    res.render("home.ejs") //here home is template of home page
});//here we are not sending here we render the code
//rendering the complete ejs file
//helps to run from home directiry

app.get("/rolldice",(req,res)=>{
    console.log("Req received")
    let num =Math.floor( Math.random() * 6)+1 ; //here we get data from the data base
    res.render("rolldice.ejs",{num}); //this is what we are calling to ejs templete and giving dynamic value to it as dice value from the data base
})



//instagram basic ejs
app.get(("/ig/:username"),(req,res)=>{
    let {username}=req.params;
    const instadata=require("./data.json")
    const data =instadata[username]
    console.log(data)
    res.render("instagram.ejs",{data})
})




app.get(("/hello"),(req,res)=>{
    console.log("Request recieved")
    res.send("Request recived for the hello and given you this folder")

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





// interpolation syntax

// we are going to make dynamics to the home page like instagram
