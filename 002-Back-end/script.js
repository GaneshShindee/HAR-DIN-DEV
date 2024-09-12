// // // let n=5;
// // // for(let i=0;i<n;i++){
// // //     console.log("hello,",i);
// // // }
// // // console.log("hello,",i);

// // // console.log(process.argv)

// // // let args =process.argv;

// // // for(let i=2;i<args.length;i++){
// // //     console.log("hello and welcome to ",args[i])
// // // }




// // const math= require("./math");
// // console.log(math)
// // // console.log(math.eight)
// // // console.log(math.pi)
// // // console.log(math.sum(2,2))


// // const info =require("./Fruits");
// // console.log(info);


// var figlet = require("figlet");

// figlet("Ganesh Shinde!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });
import {sum,pi} from "./math.js";
// console.log(sum(1,2));

import { generate, count } from "random-words";

console.log(generate());