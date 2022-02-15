const router = require('express').Router();
const bcrypt = require('bcrypt');
const ejwt = require('express-jwt');
const jwt = require('jsonwebtoken');

const { User } = require('../../models/index')

// Login route
router.post('/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  if(!email || !password){
    return res.json({message: 'No email or password provided'})
  }
  // on login, see if user exists
  User.findOne({ where: { user_name: email }}).then(user => {
    if(user){
      // check the user's password
      bcrypt.compare(password, user.password).then(result => {
        if(result){
          const token = jwt.sign({ id: user.id, user_name: user.user_name  }, process.env.JWT_SECRET);
          console.log(token)
          return res.json({ token: token })
        } else {
          return res.json({message: 'Incorrect username or password'})
        }
      })

    } else {
      return res.json({message: 'Incorrect username or password'})
    }
  })
  // if user exists, then we need to send back a json web token
  // error handling for if user doesn't exist
})


// Register Route
router.post('/register', (req, res) => {

  const email = req.body.email
  const password = req.body.password


  User.findOne({ where: { user_name: email }}).then(user => {
    if(user){
      return res.json({ message: 'User Exists'})
    } else {
      return bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
          return User.create({
            user_name: email,
            password: hash
          }).then(createdUser => {
            const token = jwt.sign({ id: createdUser.id, user_name: createdUser.user_name  }, process.env.JWT_SECRET);
            return res.json({ token: token })
          });
        })
      })
      
    }
  }).catch(error => {
    return res.send(error)
  })
})

module.exports = router;