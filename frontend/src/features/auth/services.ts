// Auth services
export const login = async ({ email }: { email: string; password: string }) => {
  // TODO: Implement login API call
  return { token: 'fake-token', user: { id: '1', name: 'User', email } };
};

export const register = async (userData: { name: string; email: string; password: string }) => {
  // TODO: Implement register API call
  return { token: 'fake-token', user: { id: '1', name: userData.name, email: userData.email } };
};