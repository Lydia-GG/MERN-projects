import express from 'express';
import User from '../models/User.js';
import createUser from '../controllers/user/createUser.js';
import loginUser from '../controllers/user/loginUser.js';
const router = express.Router();
// creating user
router.post('/', createUser);

// login user

router.post('/login', loginUser);

export default router;
