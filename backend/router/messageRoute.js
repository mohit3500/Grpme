const { Router } = require('express');
const {
  allMessages,
  sendMessage,
} = require('../controllers/messageController');
const auth = require('../middleware/auth');
const router = Router();

router.route('/:chatId').get(auth, allMessages);
router.route('/').post(auth, sendMessage);

module.exports = router;
