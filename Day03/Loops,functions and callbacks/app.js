//Loops
let ans = 0
for(i=1; i<=100;i++){
    ans = ans + i;
}
console.log(ans);


//functions
function findsum(n){
    let ans = 0;
    for(let i = 1;i<=n;i++){
        ans = ans + i;
    }
    return ans;
}
console.log(findsum(10));

//callbacks
function square(n){
    return n*n
}

function cube(n){
    return n*n*n
}

function sumofsomething(a,b,fn){
    const val1 = fn(a);
    const val2 = fn(b);
    return val1 + val2;
}

console.log(sumofsomething(6,48,square));

//anonymous function
console.log(sumofsomething(6,48,function(n){
    return n*n*n*n
}))
