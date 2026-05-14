// TypeScript types
export interface User {
  id: string;
  name: string;
  email: string;
}

export interface Meeting {
  id: string;
  title: string;
  participants: string[];
  startTime: string;
}

export interface Message {
  id: string;
  content: string;
  sender: string;
  timestamp: string;
}