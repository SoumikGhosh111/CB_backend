const express = require('express'); 
router = express.Router(); 
const {register, login} = require('../controller/userController'); 

router.get('/login', login); 
router.post('/register', register); 

module.exports = router; 

//Line Added BY Anand  to

//fork commit by subh