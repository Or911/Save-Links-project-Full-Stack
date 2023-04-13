const express = require("express");
const dataManager = require('../utilities/dataManager')
const securityManager = require("../utilities/securityManager");
const router = express.Router();

const authToken = securityManager.authenticateToken

router.get("/list" ,authToken ,function (req, res) {
  let user = req.user
  dataManager.getList(user)
  .then(list => {
    res.send({list}); 
  })
});

router.post("/list" ,authToken , function(req , res){
  let user = req.user
  let data = req.body
  dataManager.addList(user, data)
  .then(() => res.status(201).send("success"))
  .catch(()=> res.status(400).send("error"))

})

router.delete("/list" ,authToken , function(req , res){
  let user = req.user
  let listID = req.query.deleteList
  dataManager.deleteList(user , listID)
  .then((success) => res.send(success))
})



module.exports = router;
