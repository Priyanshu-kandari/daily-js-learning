// async nature of settimeout function

function findsum(n){
    let ans = 0;
    for ( let i = 0 ; i<=n; i++){
        ans = ans + i;
    }
    return ans
}

function findsumtill100(){
    console.log(findsum(100));
}

setTimeout(findsumtill100,3000);
console.log("hello");

const fs = require("fs")
fs.readFile("a.txt","utf-8",function(err,data){
    console.log(data);
})

console.log("i am Priyanshu kandari");