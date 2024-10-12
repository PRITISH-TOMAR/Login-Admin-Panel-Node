const express = require('express');
const { saveUserData, showAllUSer} = require('../Controllers/User')

const router = express.Router();


router.post('/user', saveUserData);
router.get('/user', showAllUSer);


module.exports = router;
