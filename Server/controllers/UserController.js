const express = require('express');
const router = express.Router();
const knex = require('../config/db');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/user')();
const Promise = require('promise');
const jwt = require('jsonwebtoken');
const config = require('../config/config.js');

const VerifyToken = require('../middleware/VerifyToken');


router.post('/register', async (req, res) => 
{                              
  if(!req.body)  res.json({isSuccess: false, message: 'Please send a valid form'});
  let validForm = User.ValidRegisterFormData(req.body, res);
  if(validForm)
      User.CheckDuplicatesHashAndSaveUser(req.body, res)
});
    
router.post('/login', async (req, res) => 
{
  let valid = User.ValidLoginFormData(req.body, res);
  if(valid) {
    User.CompareHashedAndLogin(req.body, res);   
  }
});

router.get('/validate-jwt', VerifyToken, async (req, res) => {
  res.json({success: true})
})


router.get('/profile', VerifyToken, async (req, res) => 
{
  try 
  {
    await User.FindUser(req.id, res);
  }
  catch
  { 
    res.json({isSuccess: false, message: 'User is not valid'})  
  }
});

router.get('/isDuplicateEmail/?:email', (req, res) => 
{
  console.log('hit', req.params.email)
})




module.exports = router;