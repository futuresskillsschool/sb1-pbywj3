import React from 'react';

export default function SessionsCalendar() {
  const sessions = [
    {
      id: 1,
      client: 'Sarah Johnson',
      time: '10:00 AM',
      type: 'Career Strategy',
    },
    {
      id: 2,
      client: 'Michael Chen',
      time: '2:00 PM',
      type: 'Interview Prep',
    },
    {
      id: 3,
      client: 'Emily Brown',
      time: '4:00 PM',
      type: 'Skills Assessment',
    },
  ];

  return (
    <div className="space-y-4">
      {sessions.map((session) => (
        <div
          key={session.id}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
        >
          <div>
            <h3 className="font-medium">{session.client}</h3>
            <p className="text-sm text-gray-500">{session.type}</p>
          </div>
          <span className="text-sm font-medium text-indigo-600">{session.time}</span>
        </div>
      ))}
    </div>
  );
}