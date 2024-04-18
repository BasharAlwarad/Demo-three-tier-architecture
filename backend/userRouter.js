import express from 'express';
import { getAllUsers, getOneUser, addUser } from './userController.js';

const router = express.Router();

// http://localhost:8000/user/
router.route('/').get(getAllUsers).post(addUser);

// http://localhost:8000/user/:id
router.route('/:id').get(getOneUser);

export default router;
