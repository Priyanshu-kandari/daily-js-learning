const express = require("express");
const app = express();
const p = 3002

app.use(express.json())

app.post('/', (req,res)=>{
    console.log("Headers:", req.headers);
    console.log("Body    :", req.body);  
    res.send("hello world")
})

app.listen(p, () => console.log(`Server running at http://localhost:${p}`));
 