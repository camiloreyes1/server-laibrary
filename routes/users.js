var express = require('express');
const isAuthenticated = require('../middleware/isAuthenticated');
const User = require('../models/User');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/edit/:userId', isAuthenticated, (req,res,next) => {

  const { occupation } = req.body

  User.findByIdAndUpdate
  (
    req.params.userId, 
    {
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

})

module.exports = router;
