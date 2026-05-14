// Generate token utility
import jwt from 'jsonwebtoken';

const generateToken = (payload = {}) => {
  return jwt.sign(payload, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
};

export default generateToken;