import Sidebar from '../../../components/common/Sidebar';

const Profile = () => {
  const stats = [
    { label: 'Meetings this month', value: '22', detail: '8 active participants' },
    { label: 'Task response rate', value: '92%', detail: 'Fast follow-ups' },
    { label: 'AI insights used', value: '14', detail: 'Summaries generated' },
  ];

  const reports = [
    { title: 'Monthly performance', subtitle: 'Expand team collaboration outcomes', status: 'Completed', color: 'from-blue-500 to-cyan-500' },
    { title: 'Security review', subtitle: 'Update password & access control', status: 'Pending', color: 'from-orange-500 to-amber-500' },
    { title: 'Profile health', subtitle: 'Optimize availability and calendar sync', status: 'Good', color: 'from-emerald-500 to-teal-500' },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50/30">
      <Sidebar />
      <main className="flex-1 overflow-auto">
        <div className="p-8 max-w-7xl mx-auto">
          <div className="mb-8 slide-in">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500 mb-3">User profile</p>
                <h1 className="text-4xl font-bold text-slate-950">View insights & manage reports</h1>
                <p className="text-slate-600 mt-3 max-w-2xl text-lg">
                  Customize your personal workspace, review AI-driven performance metrics, and access critical reports from one polished dashboard.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <button className="btn btn-secondary">Edit profile</button>
                <button className="btn btn-primary">Download insights</button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
            <section className="xl:col-span-4 card slide-in stagger-1 bg-white border border-slate-200 shadow-md">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Account overview</p>
                  <h2 className="text-2xl font-bold text-slate-950">John Doe</h2>
                </div>
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-violet-600 text-white text-2xl font-semibold shadow-lg">
                  JD
                </div>
              </div>
              <div className="space-y-5 text-slate-700">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-1">Email</p>
                  <p className="font-medium">john.doe@intellmeet.com</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-1">Role</p>
                  <p className="font-medium">Product Manager</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-1">Team</p>
                  <p className="font-medium">Growth & Strategy</p>
                </div>
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-sm text-slate-600">Profile strength</p>
                  <div className="mt-3 h-3 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 w-82" />
                  </div>
                  <p className="mt-2 text-xs text-slate-500">82% completed — connect calendar and add a profile picture.</p>
                </div>
              </div>
            </section>

            <section className="xl:col-span-8 grid grid-cols-1 gap-6">
              <div className="card slide-in stagger-2 bg-gradient-to-br from-white to-slate-100 border border-slate-200 shadow-md">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Performance report</p>
                    <h2 className="text-2xl font-bold text-slate-950">Insights summary</h2>
                  </div>
                  <button className="btn btn-ghost">View full report</button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {stats.map((item) => (
                    <div key={item.label} className="rounded-3xl bg-slate-50 p-5">
                      <p className="text-3xl font-bold text-slate-950">{item.value}</p>
                      <p className="text-sm text-slate-500 mt-2">{item.label}</p>
                      <p className="text-xs text-slate-400 mt-3">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card slide-in stagger-3 bg-white border border-slate-200 shadow-md">
                  <div className="mb-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Report library</p>
                    <h2 className="text-2xl font-bold text-slate-950">Recent reports</h2>
                  </div>
                  <div className="space-y-4">
                    {reports.map((report) => (
                      <div key={report.title} className="rounded-3xl border border-slate-200 p-5 hover:border-primary-300 transition-colors">
                        <div className="flex items-center justify-between gap-4">
                          <div>
                            <h3 className="font-semibold text-slate-950">{report.title}</h3>
                            <p className="text-sm text-slate-500 mt-1">{report.subtitle}</p>
                          </div>
                          <span className={`rounded-full px-3 py-1 text-xs font-semibold text-white bg-gradient-to-r ${report.color}`}>{report.status}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="card slide-in stagger-4 bg-gradient-to-br from-slate-950 to-slate-800 text-white border-0 shadow-xl">
                  <div className="mb-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Fast actions</p>
                    <h2 className="text-2xl font-bold">Quick access</h2>
                  </div>
                  <div className="space-y-4 text-sm text-white/80">
                    <div className="rounded-3xl bg-white/10 p-4">
                      <p className="font-semibold text-white">Generate meeting summary</p>
                      <p className="mt-2">Create a polished report for the latest review meeting.</p>
                    </div>
                    <div className="rounded-3xl bg-white/10 p-4">
                      <p className="font-semibold text-white">Review security settings</p>
                      <p className="mt-2">Check login activity and password policy health.</p>
                    </div>
                    <div className="rounded-3xl bg-white/10 p-4">
                      <p className="font-semibold text-white">Schedule review</p>
                      <p className="mt-2">Plan your next performance review with the team.</p>
                    </div>
                  </div>
                  <button className="mt-6 btn btn-primary">Open report center</button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
