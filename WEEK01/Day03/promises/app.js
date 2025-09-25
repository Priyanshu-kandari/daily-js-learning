const fs = require("fs")

function kandarireadfile(){
   return new Promise(function(resolve){
       fs.readFile("a.txt","UTF-8",function(err,data){
           resolve(data);
       })
   })
}

function ondone(data){
   console.log(data)
}

kandarireadfile().then(ondone) 
 
let a = new Promise(function(resolve){
    resolve("hi there");
})

a.then(function(){
    console.log(a);
})