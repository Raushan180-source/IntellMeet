import Sidebar from '../../../components/common/Sidebar';

const Analytics = () => {
  const cards = [
    { title: 'Meeting engagement', value: '87%', delta: '+6%', icon: '📈', color: 'from-blue-600 to-cyan-500' },
    { title: 'AI adoption', value: '72%', delta: '+11%', icon: '🤖', color: 'from-violet-600 to-fuchsia-500' },
    { title: 'Tasks completed', value: '54', delta: '+9', icon: '✅', color: 'from-emerald-500 to-teal-500' },
    { title: 'Avg duration', value: '38m', delta: '-4m', icon: '⏱️', color: 'from-orange-500 to-amber-500' },
  ];

  const insights = [
    { title: 'Top performing team', value: 'Design', meta: '38 meetings last month' },
    { title: 'Peak collaboration', value: 'Wednesday', meta: 'Highest attendance' },
    { title: 'Leading topic', value: 'Project planning', meta: '72% of summaries' },
  ];

  const reports = [
    { name: 'Monthly review', status: 'Ready', label: 'Team performance' },
    { name: 'AI summary index', status: 'New', label: 'Insight coverage' },
    { name: 'Security audit', status: 'Pending', label: 'Access control' },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50/30">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8 max-w-7xl mx-auto">
          <div className="mb-8 slide-in">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">Insights & reports</p>
                <h1 className="text-4xl font-bold text-slate-950">Professional analytics suite</h1>
                <p className="text-slate-600 mt-3 max-w-2xl text-lg">
                  Track meeting impact, report status, and AI-driven trends with a premium business-ready interface.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="btn btn-secondary">Share report</button>
                <button className="btn btn-primary">Export summary</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            {cards.map((card, index) => (
              <div key={card.title} className={`card slide-in stagger-${index + 1} bg-gradient-to-br ${card.color} text-white border-0 shadow-xl`}>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-white/80">{card.title}</p>
                    <p className="text-3xl font-bold mt-3">{card.value}</p>
                  </div>
                  <div className="text-4xl">{card.icon}</div>
                </div>
                <p className="text-sm text-white/80">{card.delta} vs last week</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mb-8">
            <div className="xl:col-span-2 card slide-in stagger-5 bg-white border border-slate-200 shadow-md">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Report overview</p>
                  <h2 className="text-2xl font-bold text-slate-950">Operational health metrics</h2>
                </div>
                <span className="text-sm font-semibold text-slate-500">Updated 5 mins ago</span>
              </div>
              <div className="grid gap-4">
                {['Engagement', 'Satisfaction', 'Follow-up rate'].map((metric) => (
                  <div key={metric} className="rounded-3xl bg-slate-100 p-5">
                    <div className="flex items-center justify-between mb-3">
                      <p className="font-semibold text-slate-900">{metric}</p>
                      <span className="text-sm text-slate-500">Trend</span>
                    </div>
                    <div className="w-full h-4 rounded-full bg-white overflow-hidden">
                      <div className={`h-4 rounded-full bg-gradient-to-r from-primary-500 to-cyan-500 ${
                        metric === 'Engagement' ? 'w-87' : metric === 'Satisfaction' ? 'w-93' : 'w-79'
                      }`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card slide-in stagger-6 bg-gradient-to-br from-white to-slate-100 border border-slate-200 shadow-md">
              <div className="mb-6">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Top insights</p>
                <h2 className="text-2xl font-bold text-slate-950">AI recommendations</h2>
              </div>
              <ul className="space-y-4">
                {insights.map((insight) => (
                  <li key={insight.title} className="rounded-3xl border border-slate-200 p-5 hover:border-primary-300 transition-colors">
                    <p className="text-sm text-slate-500 uppercase tracking-[0.2em] mb-2">{insight.title}</p>
                    <p className="font-semibold text-slate-950">{insight.value}</p>
                    <p className="text-sm text-slate-500 mt-2">{insight.meta}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card slide-in stagger-7 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-0 shadow-xl">
              <div className="mb-5">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Report center</p>
                <h2 className="text-2xl font-bold">Recent exports</h2>
              </div>
              <div className="space-y-4">
                {reports.map((report) => (
                  <div key={report.name} className="rounded-3xl bg-white/10 p-5">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold text-white">{report.name}</p>
                        <p className="text-sm text-slate-300 mt-1">{report.label}</p>
                      </div>
                      <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">{report.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card slide-in stagger-8 bg-white border border-slate-200 shadow-md">
              <div className="mb-5">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Action items</p>
                <h2 className="text-2xl font-bold text-slate-950">What's next</h2>
              </div>
              <div className="space-y-4 text-slate-700">
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="font-semibold">Schedule follow-up review</p>
                  <p className="text-sm text-slate-500 mt-2">Set a review meeting for your next sprint plan.</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="font-semibold">Share summary dashboard</p>
                  <p className="text-sm text-slate-500 mt-2">Send the latest analytics summary to stakeholders.</p>
                </div>
                <div className="rounded-3xl bg-slate-50 p-4">
                  <p className="font-semibold">Enable calendar sync</p>
                  <p className="text-sm text-slate-500 mt-2">Improve meeting scheduling accuracy automatically.</p>
                </div>
              </div>
              <button className="mt-6 btn btn-primary">View all reports</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Analytics;
