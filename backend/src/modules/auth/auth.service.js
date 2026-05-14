// Auth service
import generateToken from '../../utils/generateToken.js';

const authenticateUser = async (credentials) => {
  // TODO: Implement authentication logic
  return { token: generateToken() };
};

export { authenticateUser }; 