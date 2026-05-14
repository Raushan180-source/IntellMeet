// AI routes
import { Router } from 'express';
import { generateSummary, getSummary } from './ai.controller.js';

const router = Router();

router.post('/summary/:meetingId', generateSummary);
router.get('/summary/:meetingId', getSummary);

export default router;