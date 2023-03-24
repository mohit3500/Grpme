const { Router } = require('express');
const {
  accessChat,
  fetchChats,
  createGroupChat,
  renameGroup,
  removeFromGroup,
  addToGroup,
} = require('../controllers/chatController');
const auth = require('../middleware/auth');
const router = Router();

router.route('/').post(auth, accessChat);
router.route('/').get(auth, fetchChats);
router.route('/group').post(auth, createGroupChat);
router.route('/group/rename').put(auth, renameGroup);
router.route('/group/remove').put(auth, removeFromGroup);
router.route('/group/add').put(auth, addToGroup);

module.exports = router;
