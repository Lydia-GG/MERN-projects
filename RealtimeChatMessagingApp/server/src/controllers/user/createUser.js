import User from '../../models/User.js';

const createUser = async (req, res) => {
  try {
    const { name, email, password, picture } = req.body;
    console.log(req.body);
    const user = await User.create({ name, email, password, picture });
    res.status(201).json(user);
  } catch (error) {
    let msg;
    if (error.code == 11000) {
      msg = 'user is already exists';
    } else {
      msg = error.message;
    }
    res.status(400).json(msg);
  }
};

export default createUser;
