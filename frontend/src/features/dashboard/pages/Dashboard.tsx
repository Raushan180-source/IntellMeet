import Sidebar from '../../../components/common/Sidebar';

const Dashboard = () => {
  const stats = [
    {
      title: 'Active Meetings',
      value: '3',
      change: '+12%',
      icon: '📹',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      title: 'Tasks Completed',
      value: '24',
      change: '+8%',
      icon: '✅',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50'
    },
    {
      title: 'AI Summaries',
      value: '12',
      change: '+23%',
      icon: '🤖',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50'
    },
    {
      title: 'Team Members',
      value: '8',
      change: '+2',
      icon: '👥',
      color: 'from-orange-500 to-red-500',
      bgColor: 'from-orange-50 to-red-50'
    }
  ];

  const recentActivities = [
    {
      type: 'meeting',
      title: 'Project Review',
      description: 'AI summary generated and shared',
      time: '2 hours ago',
      icon: '📝',
      color: 'text-blue-600'
    },
    {
      type: 'task',
      title: 'Documentation update',
      description: 'Task completed by the product team',
      time: '4 hours ago',
      icon: '✅',
      color: 'text-green-600'
    },
    {
      type: 'meeting',
      title: 'Leadership standup',
      description: 'Confirmed agenda for tomorrow',
      time: '6 hours ago',
      icon: '📅',
      color: 'text-purple-600'
    },
    {
      type: 'ai',
      title: 'AI recommendations',
      description: 'Action items prioritized by the assistant',
      time: '1 day ago',
      icon: '💡',
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 slide-in">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                  Executive dashboard
                </h1>
                <p className="text-gray-600 mt-2 text-lg">
                  Review your meeting performance, team activity, and AI recommendations.
                </p>
              </div>
              <div className="flex space-x-3">
                <button className="btn btn-primary">
                  <span className="mr-2">📹</span>
                  Start meeting
                </button>
                <button className="btn btn-secondary">
                  <span className="mr-2">📋</span>
                  Create task
                </button>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div
                key={stat.title}
                className={`card slide-in stagger-${index + 1} bg-gradient-to-br ${stat.bgColor} border-0`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-xl shadow-lg`}>
                    {stat.icon}
                  </div>
                  <div className={`text-sm font-semibold ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                    {stat.change}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</h3>
                  <p className="text-gray-600 text-sm font-medium">{stat.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Quick Actions */}
            <div className="lg:col-span-1">
              <div className="card slide-in stagger-5">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3">⚡</span>
                  Quick Actions
                </h3>
                <div className="space-y-4">
                  <button className="w-full btn btn-primary justify-start">
                    <span className="mr-3 text-xl">📹</span>
                    <div className="text-left">
                      <div className="font-semibold">Start Meeting</div>
                      <div className="text-xs opacity-80">Begin an instant meeting</div>
                    </div>
                  </button>
                  <button className="w-full btn btn-secondary justify-start">
                    <span className="mr-3 text-xl">📅</span>
                    <div className="text-left">
                      <div className="font-semibold">Schedule Meeting</div>
                      <div className="text-xs opacity-80">Plan for later</div>
                    </div>
                  </button>
                  <button className="w-full btn btn-secondary justify-start">
                    <span className="mr-3 text-xl">📋</span>
                    <div className="text-left">
                      <div className="font-semibold">Create Task</div>
                      <div className="text-xs opacity-80">Add to your list</div>
                    </div>
                  </button>
                  <button className="w-full btn btn-ghost justify-start">
                    <span className="mr-3 text-xl">🤖</span>
                    <div className="text-left">
                      <div className="font-semibold">AI Assistant</div>
                      <div className="text-xs opacity-80">Get help with tasks</div>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="lg:col-span-2">
              <div className="card slide-in stagger-6">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="mr-3">📈</span>
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-50/50 transition-colors duration-200 cursor-pointer group"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-200`}>
                        {activity.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-gray-900 truncate">{activity.title}</h4>
                          <span className="text-xs text-gray-500 ml-2">{activity.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <span className="text-gray-400">→</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <button className="w-full btn btn-ghost text-sm">
                    View All Activity
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Upcoming Meetings Preview */}
          <div className="mt-8">
            <div className="card slide-in stagger-7">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <span className="mr-3">📅</span>
                  Upcoming Meetings
                </h3>
                <button className="btn btn-ghost text-sm">
                  View Calendar
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {[
                  { title: 'Team Standup', time: 'Today 10:00 AM', participants: 5 },
                  { title: 'Client Presentation', time: 'Today 2:00 PM', participants: 8 },
                  { title: 'Project Review', time: 'Tomorrow 11:00 AM', participants: 6 }
                ].map((meeting, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-3xl border border-gray-200 hover:border-primary-300 hover:shadow-lg transition-all duration-200 bg-white"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 text-lg">{meeting.title}</h4>
                        <p className="text-sm text-gray-500 mt-2">{meeting.time}</p>
                      </div>
                      <div className="rounded-full bg-slate-100 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
                        {meeting.participants} participants
                      </div>
                    </div>
                    <div className="mt-5 flex items-center gap-2">
                      {[...Array(Math.min(meeting.participants, 3))].map((_, i) => (
                        <div
                          key={i}
                          className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary-500 to-secondary-500 border-2 border-white shadow-sm flex items-center justify-center text-xs text-white font-semibold"
                        >
                          {i + 1}
                        </div>
                      ))}
                      {meeting.participants > 3 && (
                        <div className="w-8 h-8 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-xs text-slate-600 font-semibold">
                          +{meeting.participants - 3}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;