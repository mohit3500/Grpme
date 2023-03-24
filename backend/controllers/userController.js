const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    res.status(400).json({ msg: 'credentials not fulfilled ' });
  }

  const duplicateUsername = await User.findOne({ username });
  if (duplicateUsername) {
    return res.status(409).json({ msg: 'Please use an unique username' });
  }

  const duplicateEmail = await User.findOne({ username });
  if (duplicateEmail) {
    return res.status(409).json({ msg: 'Please use an unique email' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    ...req.body,
    username,
    email,
    password: hashedPassword,
  });

  const token = jwt.sign(
    { id: user._id, email, username },
    process.env.SecretKey
  );

  try {
    res
      .status(201)
      .json({ msg: 'Thanks for registering', token: token, user: user });
  } catch (error) {
    res.status(400).send(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(400).json({ msg: 'Email does not exist' });
  }

  const verPass = bcrypt.compareSync(password, user.password);
  if (!verPass) {
    return res.status(400).json({ msg: 'Password is wrong' });
  }

  const token = jwt.sign(
    { id: user._id, email: user.email, username: user.username },
    process.env.SecretKey
  );

  try {
    res.status(201).send({ message: 'Logged in', token: token, user: user });
  } catch (error) {
    res.status(400).send(error);
  }
};

const getAllUser = async (req, res) => {
  const keyword = req.query.search
    ? {
        $or: [
          { name: { $regex: req.query.search, $options: 'i' } },
          { email: { $regex: req.query.search, $options: 'i' } },
        ],
      }
    : {};

  const users = await User.find(keyword).find({ _id: { $ne: req.user._id } });
  res.status(201).send(users);
};

module.exports = { register, login, getAllUser };
