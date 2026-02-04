import React from 'react';
import { BarChart3, AlertTriangle, ShieldCheck, TrendingUp, Clock, Info } from 'lucide-react';

const FinanceOperationsDashboard = () => {
  const alxLogo = "https://recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/000/017/157/original/ALX_Blue_Logo_(1).png?1731669501";

  const workstreams = [
    { name: 'FY26 Budget Planning', status: 'Amber', owner: 'Finance Team', milestone: 'Draft v1 Validation', deadline: 'Feb 15', risk: 'Delayed inputs from City Teams' },
    { name: 'Audit Follow-ups', status: 'Red', owner: 'Compliance', milestone: 'Evidence Collection', deadline: 'Feb 10', risk: 'Critical documentation missing' },
    { name: 'Cost Optimisation', status: 'Green', owner: 'Operations', milestone: 'Vendor Review', deadline: 'Mar 01', risk: 'None' },
    { name: 'Finance Policy Updates', status: 'Green', owner: 'Special Projects', milestone: 'Policy Drafting', deadline: 'Mar 20', risk: 'Stakeholder alignment pending' },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-4 md:p-8" style={{ fontFamily: "'Montserrat', sans-serif" }}>
      {/* HEADER: Professional Branding */}
      <header className="mb-10 flex flex-col md:flex-row items-center justify-between border-b border-slate-200 pb-6 gap-4">
        <div className="flex items-center gap-4">
          <img src={alxLogo} alt="ALX Logo" className="h-10 w-auto" />
          <div className="h-8 w-px bg-slate-300 hidden md:block"></div>
          <div>
            <h1 className="text-2xl font-bold text-[#002B49]">Finance Operations Support</h1>
            <p className="text-sm text-slate-500 font-medium">Special Projects Associate Dashboard</p>
          </div>
        </div>
        <div className="text-right">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-1">
            <Clock className="w-3 h-3 mr-1" /> Weekly Rhythm: Mon 09:00 AM
          </div>
          <p className="text-xs text-slate-400">Target: High-Level Visibility | Minimal Friction</p>
        </div>
      </header>

      {/* TRACKING LOGIC: Exception-Based Metrics */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-4 mb-10">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="text-slate-500 text-xs font-bold uppercase mb-2 flex items-center">
            <TrendingUp className="w-4 h-4 mr-2 text-blue-600" /> Budget Variance
          </div>
          <div className="text-2xl font-bold text-slate-900">12.4%</div>
          <p className="text-[10px] text-red-500 font-bold mt-1 tracking-tight">EXCEEDS 10% THRESHOLD</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="text-slate-500 text-xs font-bold uppercase mb-2 flex items-center">
            <AlertTriangle className="w-4 h-4 mr-2 text-red-500" /> Critical Risks
          </div>
          <div className="text-2xl font-bold text-slate-900">$64,200</div>
          <p className="text-[10px] text-slate-400 mt-1 uppercase font-medium">Impact across 2 streams</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
          <div className="text-slate-500 text-xs font-bold uppercase mb-2 flex items-center">
            <ShieldCheck className="w-4 h-4 mr-2 text-green-500" /> Audit Health
          </div>
          <div className="text-2xl font-bold text-slate-900">82%</div>
          <p className="text-[10px] text-slate-400 mt-1 uppercase font-medium">Compliance Readiness</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 border-l-4 border-l-[#002B49]">
          <div className="text-slate-500 text-xs font-bold uppercase mb-2 flex items-center">
            <Info className="w-4 h-4 mr-2 text-[#002B49]" /> Reporting Focus
          </div>
          <div className="text-[11px] leading-tight text-slate-600 italic">
            "Tracking critical path milestones only. Routine tasks excluded to reduce noise."
          </div>
        </div>
      </section>

      {/* DELIVERABLE 1: Workstream Status & Bottlenecks */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden mb-10">
        <div className="bg-[#002B49] px-6 py-4 flex justify-between items-center">
          <h2 className="text-white font-bold text-sm uppercase tracking-widest flex items-center">
            <BarChart3 className="w-4 h-4 mr-2" /> Parallel Workstream Status
          </h2>
          <span className="text-[10px] text-blue-200 font-medium">Updated: Feb 04, 2026</span>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 border-b border-slate-100">
              <tr className="text-[10px] text-slate-400 uppercase font-black">
                <th className="px-6 py-4">Workstream</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4">Active Milestone</th>
                <th className="px-6 py-4">Deadline</th>
                <th className="px-6 py-4">Key Risk / Bottleneck</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {workstreams.map((ws, i) => (
                <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                  <td className="px-6 py-4 font-bold text-slate-700 text-sm">{ws.name}</td>
                  <td className="px-6 py-4 text-center">
                    <span className={`text-[9px] font-black px-2 py-1 rounded uppercase tracking-tighter ${
                      ws.status === 'Green' ? 'bg-green-100 text-green-700' : 
                      ws.status === 'Amber' ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {ws.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-slate-600 text-xs">{ws.milestone}</td>
                  <td className="px-6 py-4 text-slate-500 text-xs font-mono">{ws.deadline}</td>
                  <td className="px-6 py-4">
                    <p className={`text-[11px] italic font-medium ${ws.risk !== 'None' ? 'text-red-500' : 'text-slate-400'}`}>
                      {ws.risk}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* FOOTER: Professional Credit */}
      <footer className="mt-20 border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 pb-10">
        <div className="text-[10px] text-slate-400 text-center md:text-left">
          <p>© 2026 ALX Africa. All Rights Reserved.</p>
          <p className="mt-1 font-bold">CREATED BY METHODE FOR THE ASSIGNMENT: SPECIAL PROJECTS ASSOCIATE - FINANCE</p>
        </div>
        <div className="flex items-center gap-6">
          <img src={alxLogo} alt="ALX Logo" className="h-6 opacity-40 grayscale" />
          <div className="text-[10px] text-slate-400 font-bold uppercase">Built for Executive Committee (ExCo) review</div>
        </div>
      </footer>
    </div>
  );
};

export default FinanceOperationsDashboard;
