// User routes
import { Router } from 'express';
import { getUsers, createUser } from './user.controller.js';

const router = Router();
router.get('/', getUsers);
router.post('/', createUser);

export default router;