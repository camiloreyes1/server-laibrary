var express = require('express');
const isAuthenticated = require('../middleware/isAuthenticated');
const User = require('../models/User');
var router = express.Router();

router.post('/edit/:userId', isAuthenticated, (req,res,next) => {

  const { occupation, fullName } = req.body

  User.findByIdAndUpdate
  (
    req.params.userId, 
    {
      fullName,
      occupation
    },
    {new: true}
  )
  .then((updatedProfile) => {
    console.log("UpdatedProfile ===>", updatedProfile)
    res.json(updatedProfile)
  })
  
  .catch((err) => {
    console.log(err)
    next(err)
})

});

router.get('/profile/:id', isAuthenticated, (req,res,next) => {
  User.findById(req.user._id)
  .then((foundUser) => {
    console.log("FoundUser ===>",foundUser)
    res.json(foundUser)
  })
})

module.exports = router;
