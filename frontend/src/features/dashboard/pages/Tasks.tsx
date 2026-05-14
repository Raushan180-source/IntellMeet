import { useState } from 'react';
import Sidebar from '../../../components/common/Sidebar';

interface Task {
  id: string;
  title: string;
  description: string;
  status: 'todo' | 'in-progress' | 'done';
  priority: 'low' | 'medium' | 'high';
  assignee?: string;
  dueDate?: string;
  tags: string[];
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'Update API documentation',
      description: 'Review and update all API endpoints documentation with new features',
      status: 'todo',
      priority: 'high',
      assignee: 'Alice',
      dueDate: '2024-01-15',
      tags: ['documentation', 'api']
    },
    {
      id: '2',
      title: 'Fix login authentication bug',
      description: 'Handle edge case in OAuth flow when token expires',
      status: 'in-progress',
      priority: 'high',
      assignee: 'Bob',
      dueDate: '2024-01-12',
      tags: ['bug', 'auth']
    },
    {
      id: '3',
      title: 'Implement dark mode toggle',
      description: 'Add dark mode support across the entire application',
      status: 'in-progress',
      priority: 'medium',
      assignee: 'Carol',
      dueDate: '2024-01-20',
      tags: ['ui', 'feature']
    },
    {
      id: '4',
      title: 'Deploy to production',
      description: 'Push latest changes to production environment',
      status: 'done',
      priority: 'high',
      assignee: 'David',
      dueDate: '2024-01-10',
      tags: ['deployment', 'production']
    },
    {
      id: '5',
      title: 'Setup monitoring dashboard',
      description: 'Configure application performance monitoring and alerts',
      status: 'todo',
      priority: 'medium',
      assignee: 'Eve',
      dueDate: '2024-01-25',
      tags: ['monitoring', 'devops']
    },
  ]);

  const [draggedTask, setDraggedTask] = useState<Task | null>(null);

  const moveTask = (taskId: string, newStatus: Task['status']) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, status: newStatus } : task
    ));
  };

  const handleDragStart = (task: Task) => {
    setDraggedTask(task);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, newStatus: Task['status']) => {
    e.preventDefault();
    if (draggedTask && draggedTask.status !== newStatus) {
      moveTask(draggedTask.id, newStatus);
    }
    setDraggedTask(null);
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800 border-red-200';
      case 'medium': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'low': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const columns = [
    {
      id: 'todo' as const,
      title: 'To Do',
      color: 'from-slate-50 to-slate-100',
      borderColor: 'border-slate-200',
      count: tasks.filter(t => t.status === 'todo').length
    },
    {
      id: 'in-progress' as const,
      title: 'In Progress',
      color: 'from-blue-50 to-cyan-50',
      borderColor: 'border-blue-200',
      count: tasks.filter(t => t.status === 'in-progress').length
    },
    {
      id: 'done' as const,
      title: 'Done',
      color: 'from-green-50 to-emerald-50',
      borderColor: 'border-green-200',
      count: tasks.filter(t => t.status === 'done').length
    },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8 max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8 slide-in">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent">
                  Operational task board
                </h1>
                <p className="text-slate-600 mt-2 text-lg">
                  Prioritize critical initiatives, assign owners, and monitor progress.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="btn btn-secondary">
                  <span className="mr-2">📊</span>
                  Performance
                </button>
                <button className="btn btn-primary">
                  <span className="mr-2">➕</span>
                  Add task
                </button>
              </div>
            </div>
          </div>

          {/* Kanban Board */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {columns.map((column, columnIndex) => (
              <div
                key={column.id}
                className={`bg-gradient-to-b ${column.color} rounded-3xl p-6 border-2 ${column.borderColor} min-h-96 slide-in stagger-${columnIndex + 1}`}
                onDragOver={handleDragOver}
                onDrop={(e) => handleDrop(e, column.id)}
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${
                      column.id === 'todo' ? 'bg-slate-400' :
                      column.id === 'in-progress' ? 'bg-blue-500' : 'bg-green-500'
                    }`}></div>
                    <h3 className="font-bold text-slate-900 text-lg">{column.title}</h3>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-slate-700">
                    {column.count}
                  </div>
                </div>

                <div className="space-y-4">
                  {tasks
                    .filter((task) => task.status === column.id)
                    .map((task) => (
                      <div
                        key={task.id}
                        draggable
                        onDragStart={() => handleDragStart(task)}
                        className="card cursor-move hover:shadow-xl transition-all duration-300 group"
                      >
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
                            {task.title}
                          </h4>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(task.priority)}`}>
                            {task.priority}
                          </span>
                        </div>

                        <p className="text-sm text-slate-600 mb-4 line-clamp-2">
                          {task.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {task.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="px-2 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Assignee and Due Date */}
                        <div className="flex items-center justify-between text-xs text-slate-500">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full flex items-center justify-center text-white font-semibold">
                              {task.assignee?.[0] || '?'}
                            </div>
                            <span>{task.assignee || 'Unassigned'}</span>
                          </div>
                          {task.dueDate && (
                            <div className="flex items-center space-x-1">
                              <span>📅</span>
                              <span>{new Date(task.dueDate).toLocaleDateString()}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </div>

                {/* Add Task Button */}
                {column.id === 'todo' && (
                  <button className="w-full mt-4 btn btn-ghost border-2 border-dashed border-slate-300 hover:border-primary-300 text-slate-500 hover:text-primary-600">
                    <span className="mr-2">➕</span>
                    Add Task
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { label: 'Total Tasks', value: tasks.length, icon: '📋', color: 'from-blue-500 to-cyan-500' },
              { label: 'Completed', value: tasks.filter(t => t.status === 'done').length, icon: '✅', color: 'from-green-500 to-emerald-500' },
              { label: 'In Progress', value: tasks.filter(t => t.status === 'in-progress').length, icon: '🔄', color: 'from-yellow-500 to-orange-500' },
              { label: 'Overdue', value: tasks.filter(t => t.dueDate && new Date(t.dueDate) < new Date() && t.status !== 'done').length, icon: '⚠️', color: 'from-red-500 to-pink-500' },
            ].map((stat, index) => (
              <div key={stat.label} className={`card slide-in stagger-${index + 4} bg-gradient-to-br ${stat.color} text-white border-0`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-white/80 text-sm font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold">{stat.value}</p>
                  </div>
                  <div className="text-4xl opacity-80">{stat.icon}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Tasks;