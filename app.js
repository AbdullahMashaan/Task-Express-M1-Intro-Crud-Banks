const express = require("express");
const accounts = require("./accounts");
const app = express();
const port = "8000"
app.use(express.json())

const creatNewAccount = (newAccountData) => {
const newId = accounts.length + 1
const newAccount = Object.assign({id: newId},newAccountData )
console.log ("The New Account is", newAccount)
return newAccount
}

const updateAccount = (currentAccount, newData) => {
    const newUpdateAccount = Object.assign(currentAccount,newData)
return newUpdateAccount
}


const deleteAccount = (deletedAccount) => {
const newAccounts = accounts.filter((account)=> account.id != deletedAccount)
console.log("The new accounts are", newAccounts)
}

//GET//

app.get('/accounts', (req, res) => {
    res.status(200).json(accounts)
})

//GET by username **bonus**//
app.get('/accounts/:accountUsername', (req, res) => {
   
    const {accountUsername} =  req.params
    const account = accounts.find((account)=>  account.username ==accountUsername);
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
    const account = accounts.find((account)=>  account.id == accountId);
  if (account){
        const updatedAccount = updateAccount(account, req.body)
        res.status(200).json(updatedAccount)
    } else {
        res.status(404).json("NOT FOUND")
    }

})

//DELETE//

app.delete('/accounts/:accountId', (req,res)=> {
  const {accountId} = req.params
  const account = accounts.find((account)=> account.id == accountId);
  if (account){
    deleteAccount(accountId)
    res.status(204).json()
  } else {
    res.status(404).json()
  }

})


//LISTEN//
app.listen(port, ()=> {
    console.log(`Bank server is Online! at http://localhost:${port}`)
});