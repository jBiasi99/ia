import React from 'react';
import { Plus } from 'lucide-react';

const stages = [
  { id: 'prospect', name: 'Prospect', color: 'bg-gray-100' },
  { id: 'contact', name: 'Contact Made', color: 'bg-blue-100' },
  { id: 'proposal', name: 'Proposal', color: 'bg-yellow-100' },
  { id: 'negotiation', name: 'Negotiation', color: 'bg-orange-100' },
  { id: 'closed', name: 'Closed Won', color: 'bg-green-100' },
];

const mockDeals: Deal[] = [
  {
    id: '1',
    title: 'Enterprise Software License',
    value: 50000,
    stage: 'proposal',
    contactId: '1',
    probability: 60,
    expectedCloseDate: '2024-04-15',
  },
  // Add more mock deals as needed
];

export default function Deals() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Deals Pipeline</h1>
          <p className="text-gray-500 mt-2">Track and manage your sales pipeline</p>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-700 transition-colors">
          <Plus size={20} />
          <span>Add Deal</span>
        </button>
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-4">
        {stages.map((stage) => (
          <div key={stage.id} className="flex-1 min-w-[300px]">
            <div className={`rounded-t-lg p-3 ${stage.color}`}>
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{stage.name}</h3>
                <span className="text-sm text-gray-600">
                  {mockDeals.filter(d => d.stage === stage.id).length} deals
                </span>
              </div>
            </div>
            <div className="bg-white rounded-b-lg shadow-sm min-h-[500px] p-4">
              {mockDeals
                .filter(deal => deal.stage === stage.id)
                .map(deal => (
                  <div
                    key={deal.id}
                    className="bg-white border rounded-lg p-4 mb-3 cursor-pointer hover:shadow-md transition-shadow"
                  >
                    <h4 className="font-medium text-gray-900">{deal.title}</h4>
                    <div className="mt-2 flex justify-between text-sm text-gray-500">
                      <span>${deal.value.toLocaleString()}</span>
                      <span>{deal.probability}%</span>
                    </div>
                    <div className="mt-2 text-xs text-gray-400">
                      Close: {new Date(deal.expectedCloseDate).toLocaleDateString()}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}