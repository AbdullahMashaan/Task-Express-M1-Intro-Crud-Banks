const accounts = require("../../accounts");


exports.listAccounts = (req, res) => {
    res.status(200).json(accounts)
}
exports.listAccountsByUsername = (req, res) => {
   
    const {accountUsername} =  req.params
    const account = accounts.find((account)=>  account.username ==accountUsername);
  if (account){
    res.status(200).json(account)
  } else {
    res.status(400).json()
  }
}
const creatNewAccount = (newAccountData) => {
    const newId = accounts.length + 1
    const newAccount = Object.assign({id: newId},newAccountData )
    console.log ("The New Account is", newAccount)
    return newAccount
    }

exports.creatNewAccount = (req,res) => {
    const newAccount = creatNewAccount (req.body);
    res.status(201).json(newAccount)
    }

    const updateAccount = (currentAccount, newData) => {
        const newUpdateAccount = Object.assign(currentAccount,newData)
    return newUpdateAccount
    }

exports.updateAccount = (req, res)=> {
    const {accountId} =  req.params
    const account = accounts.find((account)=>  account.id == accountId);
  if (account){
        const updatedAccount = updateAccount(account, req.body)
        res.status(200).json(updatedAccount)
    } else {
        res.status(404).json("NOT FOUND")
    }

}

const deleteAccount = (deletedAccount) => {
    const newAccounts = accounts.filter((account) => account.id != deletedAccount);
    console.log("The new accounts are", newAccounts);
    return newAccounts; 
  };
  
exports.deleteAccount = (req, res) => {
    const { accountId } = req.params;
    const account = accounts.find((account) => account.id == accountId);
    if (account) {
      const newAccounts = deleteAccount(accountId);
      res.status(200).json(newAccounts); 
    } else {
      res.status(404).json();
    }
  }