import React from 'react';
import { Users, BadgeDollarSign, LineChart, Briefcase } from 'lucide-react';
import DashboardCard from '../components/DashboardCard';

export default function Dashboard() {
  const stats = {
    totalDeals: 45,
    totalValue: 287500,
    activeContacts: 128,
    conversionRate: 24,
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-500 mt-2">Welcome back! Here's what's happening today.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Deals"
          value={stats.totalDeals}
          icon={Briefcase}
          trend={12}
          color="bg-blue-500"
        />
        <DashboardCard
          title="Total Value"
          value={`$${stats.totalValue.toLocaleString()}`}
          icon={BadgeDollarSign}
          trend={8}
          color="bg-green-500"
        />
        <DashboardCard
          title="Active Contacts"
          value={stats.activeContacts}
          icon={Users}
          trend={-3}
          color="bg-purple-500"
        />
        <DashboardCard
          title="Conversion Rate"
          value={`${stats.conversionRate}%`}
          icon={LineChart}
          trend={5}
          color="bg-orange-500"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Deals</h2>
          {/* Deal list component will go here */}
        </div>
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-semibold mb-4">Sales Pipeline</h2>
          {/* Pipeline chart component will go here */}
        </div>
      </div>
    </div>
  );
}