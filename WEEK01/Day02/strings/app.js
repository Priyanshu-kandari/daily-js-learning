//string manuplation-----------------------------------------------------

const str = "Priyanshu kandari";

//length
console.log(str.length);


function getlength(str){
    console.log("original string",str);
    console.log("lenght:",str.length);
}
getlength("Priyanshu")


//indexof
console.log(str.indexOf("kandari"));

function getindexof(str,target){
    console.log("index of",target,"is",str.indexOf(target));
}
getindexof("raman chauhan","chauhan");


//lastindexof
const str1 = "hello world world world"

console.log(str1.lastIndexOf("world"));

function getlastindexof(str,target){
    console.log("index of last",target,"is",str.lastIndexOf(target));
}
getlastindexof(str1,"world")


//slice
console.log(str.slice(10,17));

function getslice(str,start,end){
    console.log("original string:",str);
    console.log("after slice:",str.slice(start,end));
}
getslice(str,0,9)

//substr
console.log(str.substr(10,7)); 


//replace
console.log(str.replace("Priyanshu","Himanshu"));

//split
console.log(str.split(" "));

//trim
const str2= "           hello sir         "
console.log(str2.trim());

//toupper
console.log(str.toUpperCase());

//tolower
console.log(str.toLowerCase());

