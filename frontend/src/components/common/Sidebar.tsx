import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../../store/useAuthStore';

const Sidebar = () => {
  const location = useLocation();
  const logout = useAuthStore((state) => state.logout);

  const menuItems = [
    { name: 'Dashboard', path: '/dashboard', icon: '🏠', description: 'Executive overview' },
    { name: 'Meetings', path: '/meeting', icon: '📹', description: 'Schedule and host sessions' },
    { name: 'Tasks', path: '/tasks', icon: '📋', description: 'Track action items' },
    { name: 'Analytics', path: '/analytics', icon: '📊', description: 'Insights and reports' },
    { name: 'Profile', path: '/profile', icon: '👤', description: 'Account overview' },
  ];

  return (
    <div className="w-72 bg-white/95 backdrop-blur-xl h-full shadow-2xl border-r border-white/20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/50 to-secondary-50/50"></div>

      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-200/20 to-secondary-200/20 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-violet-200/20 to-primary-200/20 rounded-full blur-xl"></div>

      <div className="relative z-10 p-8">
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl flex items-center justify-center shadow-lg pulse-glow mb-2">
            <span className="text-white text-xl font-bold">IM</span>
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            IntellMeet
          </h1>
          <p className="text-xs text-gray-500 font-medium mt-1">AI-Powered Meetings</p>
        </div>

        <nav>
          <ul className="space-y-3 list-none p-0 m-0">
            {menuItems.map((item, index) => (
              <li key={item.path} className={`slide-in stagger-${index + 1}`}>
                <Link
                  to={item.path}
                  className={`group flex items-center px-4 py-4 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                    location.pathname === item.path
                      ? 'bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-lg transform scale-105'
                      : 'text-gray-700 hover:bg-white/80 hover:shadow-md hover:scale-[1.02]'
                  }`}
                >
                  {/* Active indicator */}
                  {location.pathname === item.path && (
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-white rounded-r-full"></div>
                  )}

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className={`relative z-10 flex items-center space-x-4 w-full`}>
                    <div className={`text-2xl transition-transform duration-300 ${
                      location.pathname === item.path ? 'scale-110' : 'group-hover:scale-110'
                    }`}>
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-sm">{item.name}</div>
                      <div className={`text-xs transition-opacity duration-300 ${
                        location.pathname === item.path
                          ? 'text-white/80'
                          : 'text-gray-500 group-hover:text-gray-600'
                      }`}>
                        {item.description}
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* User section */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center">
                <span className="text-white font-semibold text-sm">JD</span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">John Doe</p>
                <p className="text-xs text-gray-500">john@example.com</p>
              </div>
            </div>
            <button
              onClick={logout}
              className="w-full btn btn-ghost text-sm py-2"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;