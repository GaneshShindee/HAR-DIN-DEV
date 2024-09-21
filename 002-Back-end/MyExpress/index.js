// //act like server

// //read documentaions
// // first require express
 const express =require("express");
const app = express(); //express function returns some value that we stores d in app
// //this app helps to design server side web

// // app is actually Object \
// // console.dir(app);       //give so many methods are there of express this stored in app
// // above line is for seeing properties of express js stored in app

// // one of the work of server to listern we use listen funtion 
// // to use we have define port 
// // ports are the endpoints of web server and web client 
// // example is connection betn points like sea and land

let port =8080;
// //here we defined project
app.listen (port,()=>{
console.log(`app is listening at port ${port}`)
});
 
// // here we are sending request to the server 
// // till now we are sending requestion but they not recived anything 
// // means server is ok but that he can getting listen but he is unable to send any response 


// // how we create send response from server

// // app.use lister the request 
// // here there are parameters of method that is in the express
// // where first give request and back we get the response

// // app.use((req,res)=>{
// //     console.log("Request recived");//it tells to us request is recived
// // });

// // first we have to start the server by using index.js
// // then we have to send a request we have to search host on the chrome
// // for confirmation it give the output rquest recived on the terminal
// // node indexe.js ===started to listen from the port
// // after requsting on server it give the ouput in terminal that is in the console .log
// // from various platform we can send request 

// // now we will see how to send the response 

// // first we learn req and res 
// // req is text base http request 



// //these are the html pages for the special roots where we type if searched is not present then gives us default
// // app.get("/",(req,res)=>{
// //     console.log("Request recived")
// //     res.send("<h1>Ganesh Prakash Shinde from root branch</h1>");
// // });
// // app.get("/apple",(req,res)=>{
// //     // console.log(`Request recived from ${apple}`)
// //     console.log("Request recived for apple")
// //     res.send("<h1>Ganesh Prakash Shinde from apple branch</h1>");
// // });
// // app.get("/apple1",(req,res)=>{
// //     // console.log(`Request recived from ${apple1}`)
// //     console.log("Request recived for apple 1")
// //     res.send("<h1>Ganesh Prakash Shinde from apple 1 branch</h1>");
// // });
// // app.get("/apple2",(req,res)=>{
// //     // console.log(`Request recived from ${apple2}`)
// //     console.log("Request recived for apple 2")
// //     res.send("<h1>Ganesh Prakash Shinde from apple2 branch</h1>");
// // });
// // app.get("*",(req,res)=>{
// //     // console.log(`Request recived from `)
// //     console.log("Request recived for none")
// //     res.send("this path does not exists")
// // });

// //this is default type
// // app.post("/apple2",(req,res)=>{
// //     // console.log(`Request recived from ${apple2}`)
// //     res.send("<h1>Ganesh Prakash Shinde from root branch</h1>");
// // });


// // app.get(("/"),(req,res)=>{
// //     console.log("req recieved");
// //     res.send("every thing is perfect");
// // });

app.get("/",(req,res)=>{
    console.log("Request recived")
    res.send("<h1>Ganesh Prakash Shinde from root branch</h1>");
});


app.get(("/:username/:id"),(req,res)=>{
    console.log("request recived")
    let {username,id}=req.params;
    console.log(req.params)
    res.send(`<h1>this is page for username @ ${username} and id @${id}</h1>`)
})


// this is the query 
app.get(("/:search"),(req,res)=>{
    console.log(req.query);
    res.send(`Success with query `);
})




