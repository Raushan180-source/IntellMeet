import { useState } from 'react';
import Sidebar from '../../../components/common/Sidebar';

const Meeting = () => {
  const [chatOpen, setChatOpen] = useState(true);
  const [micEnabled, setMicEnabled] = useState(true);
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [screenSharing, setScreenSharing] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, user: 'Alice Johnson', message: 'Hello everyone! Ready for the meeting?', timestamp: '10:30', isAI: false },
    { id: 2, user: 'Bob Smith', message: 'Good morning! Let\'s get started.', timestamp: '10:31', isAI: false },
    { id: 3, user: 'IntellMeet AI', message: 'Welcome to the meeting! I\'ll be taking notes and providing insights.', timestamp: '10:32', isAI: true },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, {
        id: messages.length + 1,
        user: 'You',
        message: newMessage,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        isAI: false
      }]);
      setNewMessage('');
    }
  };

  const participants = [
    { id: 1, name: 'Alice Johnson', avatar: 'AJ', status: 'speaking', role: 'Host' },
    { id: 2, name: 'Bob Smith', avatar: 'BS', status: 'active', role: 'Presenter' },
    { id: 3, name: 'Carol Davis', avatar: 'CD', status: 'active', role: 'Participant' },
    { id: 4, name: 'David Wilson', avatar: 'DW', status: 'muted', role: 'Participant' },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <Sidebar />
      <main className="flex-1 flex flex-col relative">
        {/* Meeting Header */}
        <div className="bg-black/20 backdrop-blur-sm border-b border-white/10 p-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Live session</span>
              </div>
              <span className="text-white/70 text-sm">Enterprise strategy review • 45 participants</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                01:23:45
              </div>
              <span className="text-sm text-white/70">Recording enabled</span>
              <button className="text-white/70 hover:text-white transition-colors">
                <span className="text-lg">⚙️</span>
              </button>
            </div>
          </div>
        </div>

        {/* Video Grid */}
        <div className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 h-full">
            {participants.map((participant) => (
              <div
                key={participant.id}
                className={`relative rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 ${
                  participant.status === 'speaking'
                    ? 'ring-4 ring-green-400 shadow-2xl shadow-green-400/20'
                    : 'hover:ring-2 hover:ring-white/30'
                }`}
              >
                {/* Video Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center relative">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20"></div>
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
                  </div>

                  {/* Avatar */}
                  <div className="relative z-10">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center text-2xl font-bold text-white shadow-lg ${
                      participant.status === 'speaking'
                        ? 'bg-gradient-to-br from-green-400 to-green-600 scale-110'
                        : 'bg-gradient-to-br from-slate-600 to-slate-700'
                    }`}>
                      {participant.avatar}
                    </div>
                    <p className="text-white font-semibold text-center mt-3 text-sm">{participant.name}</p>
                    <p className="text-white/70 text-center text-xs">{participant.role}</p>
                  </div>

                  {/* Status Indicators */}
                  <div className="absolute top-3 left-3 flex space-x-2">
                    {participant.status === 'muted' && (
                      <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">🔇</span>
                      </div>
                    )}
                    {participant.status === 'speaking' && (
                      <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                        <span className="text-white text-xs">🎤</span>
                      </div>
                    )}
                  </div>

                  {/* AI Indicator */}
                  {participant.name.includes('AI') && (
                    <div className="absolute top-3 right-3 w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">🤖</span>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Add Participant Button */}
            <div className="aspect-video bg-white/5 backdrop-blur-sm border-2 border-dashed border-white/20 rounded-2xl flex items-center justify-center cursor-pointer hover:bg-white/10 transition-all duration-300 group">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-3 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <span className="text-2xl">➕</span>
                </div>
                <p className="text-white/70 font-medium">Invite</p>
              </div>
            </div>
          </div>
        </div>

        {/* Control Bar */}
        <div className="bg-black/40 backdrop-blur-xl border-t border-white/10 p-6">
          <div className="flex items-center justify-center space-x-4">
            <button
              onClick={() => setMicEnabled(!micEnabled)}
              className={`btn ${micEnabled ? 'bg-white/10 hover:bg-white/20' : 'bg-red-500 hover:bg-red-600'} text-white px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105`}
            >
              <span className="text-2xl mr-2">{micEnabled ? '🎤' : '🔇'}</span>
              <span className="text-sm font-medium">{micEnabled ? 'Mute' : 'Unmute'}</span>
            </button>

            <button
              onClick={() => setCameraEnabled(!cameraEnabled)}
              className={`btn ${cameraEnabled ? 'bg-white/10 hover:bg-white/20' : 'bg-red-500 hover:bg-red-600'} text-white px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105`}
            >
              <span className="text-2xl mr-2">{cameraEnabled ? '📹' : '📷'}</span>
              <span className="text-sm font-medium">{cameraEnabled ? 'Stop' : 'Start'}</span>
            </button>

            <button
              onClick={() => setScreenSharing(!screenSharing)}
              className={`btn ${screenSharing ? 'bg-blue-500 hover:bg-blue-600' : 'bg-white/10 hover:bg-white/20'} text-white px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105`}
            >
              <span className="text-2xl mr-2">🖥️</span>
              <span className="text-sm font-medium">Share</span>
            </button>

            <div className="w-px h-8 bg-white/20 mx-4"></div>

            <button className="btn bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-4 rounded-2xl transition-all duration-300 hover:scale-105">
              <span className="text-2xl mr-2">🤖</span>
              <span className="text-sm font-medium">AI Summary</span>
            </button>

            <button className="btn bg-red-500 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg">
              <span className="text-2xl mr-2">📞</span>
              Leave Meeting
            </button>
          </div>
        </div>
      </main>

      {/* Chat Panel */}
      {chatOpen && (
        <div className="w-96 bg-white/95 backdrop-blur-xl border-l border-white/20 flex flex-col shadow-2xl">
          <div className="p-6 border-b border-gray-200/50 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white text-lg">💬</span>
              </div>
              <div>
                <h3 className="font-bold text-gray-900">Team collaboration</h3>
                <p className="text-xs text-gray-500">Integrated meeting chat and AI notes</p>
              </div>
            </div>
            <button
              onClick={() => setChatOpen(false)}
              className="text-gray-400 hover:text-gray-600 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <span className="text-xl">✕</span>
            </button>
          </div>

          <div className="flex-1 p-6 space-y-4 overflow-y-auto">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex space-x-3 ${msg.isAI ? 'justify-start' : 'justify-end'}`}>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                  msg.isAI
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
                    : msg.user === 'You'
                      ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white'
                      : 'bg-gradient-to-br from-gray-400 to-gray-500 text-white'
                }`}>
                  {msg.isAI ? '🤖' : msg.user[0]}
                </div>
                <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                  msg.isAI
                    ? 'bg-purple-50 text-purple-900'
                    : msg.user === 'You'
                      ? 'bg-blue-500 text-white'
                      : 'bg-gray-100 text-gray-900'
                }`}>
                  <div className="flex items-center space-x-2 mb-1">
                    <span className={`text-xs font-medium ${msg.isAI ? 'text-purple-600' : msg.user === 'You' ? 'text-blue-200' : 'text-gray-500'}`}>
                      {msg.user}
                    </span>
                    <span className={`text-xs ${msg.isAI ? 'text-purple-400' : msg.user === 'You' ? 'text-blue-200' : 'text-gray-400'}`}>
                      {msg.timestamp}
                    </span>
                  </div>
                  <p className="text-sm">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-6 border-t border-gray-200/50">
            <div className="flex space-x-3">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type a message..."
                className="input flex-1 focus-ring"
              />
              <button
                onClick={sendMessage}
                className="btn btn-primary px-6"
              >
                <span className="text-lg">📤</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Chat Toggle Button */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed right-6 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-110 pulse-glow"
        >
          <span className="text-xl">💬</span>
        </button>
      )}
    </div>
  );
};

export default Meeting;