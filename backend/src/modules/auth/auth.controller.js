// Auth controller
import { authenticateUser } from './auth.service.js';

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // TODO: Implement proper authentication
    const result = await authenticateUser({ email, password });
    res.json({ success: true, data: result });
  } catch (error) {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
};

const register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    // TODO: Implement proper registration
    const result = await authenticateUser({ email, password });
    res.status(201).json({ success: true, data: result });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

export { login, register }; 