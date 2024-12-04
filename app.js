const express = require("express");
const accounts = require("./accounts");
const app = express();
const port = "8000"
app.use(express.json())

const creatNewAccount = (data) => {
console.log ("Creating New Account", data)
return data
}

const updateAccount = (currentAccount, newData) => {
    const newUpdateAccount = Object.assign(currentAccount,newData)
return newUpdateAccount
}


//GET//

app.get('/accounts', (req, res) => {
    res.status(200).json(accounts)
})

app.get('/accounts/:accountId', (req, res) => {
   
    const {accountId} =  req.params
    const account = accounts.find((account)=>  account.id ==accountId);
  if (account){
    res.status(200).json(account)
  } else {
    res.status(400).json()
  }
})

//POST//
app.post ('/accounts', (req,res) => {
const newAccount = creatNewAccount (req.body);
res.status(201).json(newAccount)
}) 


//PUT//

app.put('/accounts/:accountId', (req, res)=> {
    const {accountId} =  req.params
    const account = accounts.find((account)=>  account.id ==accountId);
  if (account){
        const updatedAccount = updateAccount(account, req.body)
        res.status(200).json(updatedAccount)
    } else {
        res.status(404).json("NOT FOUND")
    }

})


//LISTEN//
app.listen(port, ()=> {
    console.log(`Bank server is Online! at http://localhost:${port}`)
});