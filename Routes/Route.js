const express = require('express');
const { saveUserData, showAllUSer} = require('../Controllers/User')

const router = express.Router();

router.get("/", (req, res)=>{
    res.send("Ping from the server!")
})
router.post('/user', saveUserData);
router.get('/user', showAllUSer);


module.exports = router;
