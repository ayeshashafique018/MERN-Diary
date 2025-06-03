
// import { a } from './mymodule.js';
// console.log(a);

// import obj from "./mymodule.js"
// console.log (obj)

// import { a } from './mymodule2.js';
// console.log(a, __dirname, __filename);


// const a = require("./mymodule2.js")
// console.log (a)
 import fs from "fs";

//  const  fs = require ("fs")
//  console.log (fs)

//file making
//  fs.writeFileSync ("ayesha.txt ", "ayesha is good")
//  fs.write ("ayeshaa.txt" ," ayesha is beautiful ", ()=>{
//     console.log("done")
//  })
//  console.log ("ending")
fs.writeFile("ayeshaa.txt", "ayesha is beautiful", (err) => {
    if (err) {
        console.error("Error writing file:", err);
        return;
    }
    console.log("Write: done");

    // Reading the same file
    fs.readFile("ayeshaa.txt", "utf-8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return;
        }
        console.log("Read content:", data);
    });
});

console.log("ending");