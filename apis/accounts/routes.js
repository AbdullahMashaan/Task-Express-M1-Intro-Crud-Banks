const express = require("express");
const accounts = require("../../accounts");
const {listAccounts, listAccountsByUsername, creatNewAccount, updateAccount, deleteAccount } = require("./controllers")
const router = express.Router();


router.get('/', listAccounts )
router.get('/:accountUsername',listAccountsByUsername )
router.post ('/', creatNewAccount ) 
router.put('/:accountId',updateAccount )
router.delete('/:accountId', deleteAccount);
  
  

module.exports = router;

