// Chat controller
const sendMessage = async (req, res) => {
  res.send('Send message');
};

const getMessages = async (req, res) => {
  res.send('Get messages');
};

export { sendMessage, getMessages };
