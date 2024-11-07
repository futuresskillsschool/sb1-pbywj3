import React from 'react';

export default function ClientList() {
  const clients = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      progress: 75,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director',
      progress: 60,
    },
    {
      id: 3,
      name: 'Emily Brown',
      role: 'Product Manager',
      progress: 90,
    },
  ];

  return (
    <div className="space-y-4">
      {clients.map((client) => (
        <div
          key={client.id}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
        >
          <div>
            <h3 className="font-medium">{client.name}</h3>
            <p className="text-sm text-gray-500">{client.role}</p>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-32 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-indigo-600 rounded-full"
                style={{ width: `${client.progress}%` }}
              />
            </div>
            <span className="text-sm font-medium text-gray-600">
              {client.progress}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}