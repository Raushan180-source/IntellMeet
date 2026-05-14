// Task routes
import { Router } from 'express';
import { createNewTask, getAllTasks, updateTaskById, deleteTaskById } from './task.controller.js';

const router = Router();

router.get('/', getAllTasks);
router.post('/', createNewTask);
router.put('/:id', updateTaskById);
router.delete('/:id', deleteTaskById);

export default router;