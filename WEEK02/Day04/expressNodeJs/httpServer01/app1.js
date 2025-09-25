const express = require("express");
const app = express();
app.use(express.json()); 
app.use(express.text());

const port = process.env.PORT || 3000;

app.post("/", (req,res) => {
    const message = req.query.user;
    console.log(message);
    console.log("Body received:", req.body);
    res.send("Data received!");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
