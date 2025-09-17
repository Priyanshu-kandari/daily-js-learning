// var, let and const---------------------------------------------

var a = 1;
a = 2;
console.log(a); //2


const a = 1;
a = 2;
console.log(a); //error

let firstname1= "himanshu";
let age = 18;
let ismarried = false;

console.log("this persons name is "+ firstname + "and their age is "+age);


//if else -------------------------------------------------------------------------------------------------------------------------------------

// let firstn= "himanshu";
// let age = 18;
// let ismarried = false;

// if (ismarried===true){
//     console.log(firstn+" is married");
// }else{
//     console.log(firstn+" is not married");
// }

//forloop-------------------------------------------------------------------------------------

for(let i=0;i<=101;i++){
    console.log(i);
}


// Let's write some code -
// 1. Write the program to greet a person given their first and last name

let fname = "Priyanshu";
let lname = " Kandari";
console.log("hello "+ fname + lname);

// 2. Write a program that greets a person based on their gender. (If else)

let firstname = "Priyanshu";
let lastname = " Kandari";
let gender = "male";
if(gender === "male"){
    console.log("hello Mr."+ firstname + lastname);
}else{
    console.log("hello Mrs."+ firstname + lastname);
}

// 3. Write a program that counts from 0-1000 and prints (for loop)

for(let i=0;i<=1001;i++){
    console.log(i);
}


//array and objects ----------------------------------------------------------------------------------------------------------------------------

const personarr=["Priyanshu","Himanshu","Raman"]
console.log(personarr[1]); //Himanshu

const user1 = {
    firstname : "Priyanshu",
    gender : "male"
}
console.log(user1.firstname);
console.log(user1["firstname"]);


//write a program print all even number in an array


// Let's write some code-
// 1. Write a program prints all the even numbers in an array
const ages = [21,22,32,52,41,56,44,155,45];
for(let i=0; i<ages.length;i++){
    if(ages[i]%2==0){
        console.log(ages[i]);
    }
}


// 2. Write a program to print the biggest number in an array
const num = [21,22,32,52,41,56,44,155,45];
let max = num[0];
for(i=0;i<num.length;i++){
    if(num[i]>max){
        max = num[i]
    }
}
console.log(max);


// 3. Write a program that prints all the male people's first name given a complex object

const alluser = [{firstname : "Priyanshu",
    gender : "male"
},{
    firstname: "Himanshu",
    gender:"male"
},{firstname:"riya",
    gender:"female"
}]

for(let i = 0;i<alluser.length;i++){
    if (alluser[i].gender === "male"){
        console.log(alluser[i].firstname)
    }
}

// 4. Write a program that reverses all the elements of an array
const num2 = [21,22,32,52,41,56,44,155,45];
let rev = [];
for(i=num2.length-1;i>=0;i--){
    rev.push(num2[i]);
}
console.log(rev);


//fumctions----------------------------------------------------------------------
function sum(a,b){
    return a+b;
}

const value = sum(1,2)
console.log(value);

//callbacks---------------------------------------------------

function sum2(a,b,fntocall){
    let result = (a+b);
    return fntocall(result);
}

function displayresult(data){
    console.log("result of the sum is:"+ data);
}

function displayresultpassive(data){
    console.log("sum's tresult is "+ data);
}

sum2(10,52,displayresult)


function calculate(a,b,operator){
    if (operator === sum){
        return sum(a,b)
    }
    if( operator=== sub){
        return a-b;
    }
    if (operator === multi){
        return a*b
    }
    if (operator === div){
        return a/b
    }
}
function sum(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function multi(a,b){
    return a*b
}
function div(a,b){
    return a/b
}
console.log(calculate(45,25,div));


// For today -
// 1. Create a counter in Javascript (counts down from 30 to 0)
let count = 30;
let timer = setInterval(()=>{
    console.log(count);
    count--;
    if (count <0){
    clearInterval(timer)}
},1000)

// 2. Calculate the time it takes between a setTimeout call and the inner function actually running
let start = Date.now();
setTimeout(()=>{
    let end = Date.now();
    let diff = end - start;
    console.log("difference of "+diff+ " ms");
},1000)


// 3. Create a terminal clock (HH:MM:SS)
setInterval(() => {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, "0");
  const mm = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");

  console.clear();
  console.log(`${hh}:${mm}:${ss}`);
}, 1000);
