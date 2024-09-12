const express=require("express");

const app= express();  //helps to contact with server

console.dir(app);
let port =8080;

app.listen(port,() => {
    console.log(`app is listening on port ${port}`);

});

app.get("/",(req,res) => {
    res.send("hello i am am root path");
})

// app.get("/search",(req,res) => {
//     res.send("you contacted search path");
// })

// app.get("/contact us",(req,res) => {
//     res.send("you contacted contact path");
// })

// // custom response if not avaliable
// app.get("*",(req,res)=>{
//     res.send("This path is not defined")
// })
// app.post("/",(req,res)=>{
//     res.send("you send a post request to root")
// })

app.get("/:username/:id",(req,res)=>{ //username is variable
    let {username,id}=req.params;
    let htmlstr =`<h1>hello,i am ganesh: where my username is ${username} and my id is ${id}</h1>`
    res.send(htmlstr)} //html code for this
)

app.get("/Search",(req,res)=>{
    let {q}=req.query;
    if(!q){
        res.send("you not researched for query");//query if not searched
    }
    res.send(`search result for ${q} result`);//output for some query
})




// app.use((req,res) => {
//     console.log(req);
//     console.log("request recieved   ");
//     let code=" <h1>Fruits </h1>"
//     // res.send(
//     //     {
//     //     name:"Ganesh",
//     //     standard:"12th"
//     // });
//     res.send(code );


// });
// app.use((req,res) => {
//     console.log(req);
//     console.log("request recieved   ");
//     let code=" <h1>Fruits </h1>"
//     // res.send(
//     //     {
//     //     name:"Ganesh",
//     //     standard:"12th"
//     // });
//     res.send(code );


// });

