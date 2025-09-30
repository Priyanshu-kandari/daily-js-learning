const express = require("express");
const app = express();
app.use(express.json()); 


// function calcsum(n) {
//     let ans = 0;
//     for (let i = 0; i <= n; i++) {
//         ans = ans + i;
//     }
//     return ans;
// }

// First server on port 3000

// app.get("/", function (req, res) {
//     const n = parseInt(req.query.n);   // string → number
//     const ans = calcsum(n);
//     res.send(ans.toString());          // Express expects string/Buffer
//     console.log("Server 1 result:", ans);
// });
// app.listen(3000, () => console.log("Server running on port 3000"));

// Second server on port 3001
// const app1 = express();
// app1.get("/", function (req, res) {
//     const n = parseInt(req.query.n);
//     const ans = calcsum(n);
//     res.send(ans.toString());
//     console.log("Server 2 result:", ans);
// });
// app1.listen(3001, () => console.log("Server running on port 3001"));


const users = [{
    name:'Priyanshu',
    kidneys:[{
        healthy: false
    }]
}];

app.get("/",function(req,res){
    const priyanshukidneys = users[0].kidneys;
    const numberofkidneys = priyanshukidneys.length
    let numberofhealthykidneys = 0;
    for (let i =0; i<numberofkidneys;i++){
        if(priyanshukidneys[i].healthy){
            numberofhealthykidneys = numberofhealthykidneys + 1
        }
    }
    
const numberofunhealthykidneys = numberofkidneys - numberofhealthykidneys;
res.json({
    numberofkidneys,
    numberofhealthykidneys,
    numberofunhealthykidneys   
})
})

app.post("/",function(req,res){
     const ishealthy = req.body.ishealthy;
     users[0].kidneys.push({
        healthy: ishealthy
     })
     res.json({
        msg:"done"
     })
})


app.put("/",function(req,res){
    if(isThereAtLeastOneUnhealthyKidney()){
        for(let i=0; i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true
    }
    res.json({msg: "action done"})
    }else{
        res.status(411).json({
            msg:"you have no unhealthy kidney"
        })
    }
    
})

app.delete("/",function(req,res){
    //only if atleast one unhealthty kidney is there do this,else return 411
    if(isThereAtLeastOneUnhealthyKidney()){
        const newkidneys = [];
     for(let i=0; i<users[0].kidneys.length;i++){
         if(users[0].kidneys[i].healthy){
             newkidneys.push({
                 healthy:true
             })
      }
     }
     users[0].kidneys = newkidneys;
     res.json({msg:"done"})
    }else{
        res.status(411).json({
            msg:"you have no unhealthy kidney"
        })
    }
    
})

function isThereAtLeastOneUnhealthyKidney(){
    let atleastoneunhealthykidney = false
    for(let i = 0; i<users[0].kidneys[i].length;i++){
        if(!users[0].kidneys[i].healthy){
            atleastoneunhealthykidney = true
        }
    }
}

app.listen(3000)
