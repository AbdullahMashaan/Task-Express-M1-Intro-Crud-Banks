const express = require("express");
const app = express();
const port = "8000"

app.use(express.json())

const accountRoutes = require ("./apis/accounts/routes");

app.use("/accounts",accountRoutes )


//LISTEN//
app.listen(port, ()=> {
    console.log(`Bank server is Online! at http://localhost:${port}`)
});