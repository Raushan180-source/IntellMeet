// Task controller
import { createTask, getTasks, updateTask, deleteTask } from './task.service.js';

export const createNewTask = async (req, res) => {
  try {
    const task = await createTask(req.body);
    res.status(201).json({ success: true, data: task });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const getAllTasks = async (req, res) => {
  try {
    const tasks = await getTasks(req.query);
    res.json({ success: true, data: tasks });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export const updateTaskById = async (req, res) => {
  try {
    const task = await updateTask(req.params.id, req.body);
    res.json({ success: true, data: task });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export const deleteTaskById = async (req, res) => {
  try {
    await deleteTask(req.params.id);
    res.json({ success: true, message: 'Task deleted successfully' });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};