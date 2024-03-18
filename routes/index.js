const { Router } = require('express');
const controllers = require('../controllers'); 

const router = Router();

router.get('/', (req, res) => res.send('Welcome to superhero api'))

router.post('/users', controllers.createUser); 
router.get('/users', controllers.getAllUsers);

module.exports = router;