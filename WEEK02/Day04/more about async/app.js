//Promise
var ans = new Promise((res,rej)=>{
    var n = Math.floor(Math.random()*10);

    if (n<5){
         res("hello its solved")
    }
    else{
         rej("we failed")
    }
})

ans.then(console.log).catch(console.log)

//aync await
async function abcd(){
    let api = await fetch(`https://randomuser.me/api/`);
    let ans1 = await api.json()
    console.log(ans1);
}

abcd()