const initialarray = [1,2,3,4];

//push
initialarray.push(2);
console.log(initialarray);

//pop
initialarray.pop();
console.log(initialarray);

//unshift
initialarray.unshift(10);
console.log(initialarray);

//shift
initialarray.shift();
console.log(initialarray);

//concat
const firstarr = [1,2,3];
const secondarr = [4,5,6];
const finalarr = firstarr.concat(secondarr);
console.log(finalarr);

//for each
function logthing(str){
    console.log(str);
}

initialarray.forEach(logthing)