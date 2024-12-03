const express = require("express");
const accounts = require("./accounts");



const app = express();
const port = "8000"


app.use(express.json())



app.get('/accounts', (req, res) => {
    res.status("200").json(accounts)
})

app.listen(port, ()=> {
    console.log(`Bank server is Online! at http://localhost:${port}`)
});