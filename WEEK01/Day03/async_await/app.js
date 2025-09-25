function kandariasyncfunction(){
    let p = new Promise(function(resolve){
        setTimeout(()=>resolve("hiii kandari"),2000)
    });
    return p;
}

async function main(){
    let value = await kandariasyncfunction();
    console.log(value);
}

main();
console.log("after main");