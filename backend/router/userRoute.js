const { Router } = require('express');
const {
  register,
  login,
  getAllUser,
} = require('../controllers/userController');
const auth = require('../middleware/auth');
const router = Router();

router.route('/register').post(register);
router.route('/login').post(login);
router.route('/user').get( auth ,getAllUser);

module.exports = router;
