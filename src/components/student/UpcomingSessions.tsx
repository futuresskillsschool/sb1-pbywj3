import React from 'react';
import { Calendar } from 'lucide-react';

export default function UpcomingSessions() {
  const sessions = [
    {
      id: 1,
      title: 'Career Strategy Session',
      coach: 'Sarah Wilson',
      time: '2:00 PM',
      date: 'Mar 15, 2024',
    },
    {
      id: 2,
      title: 'Mock Interview',
      coach: 'John Davis',
      time: '11:00 AM',
      date: 'Mar 17, 2024',
    },
  ];

  return (
    <div className="space-y-4">
      {sessions.map((session) => (
        <div
          key={session.id}
          className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
        >
          <Calendar className="h-8 w-8 text-indigo-600" />
          <div>
            <h3 className="font-medium">{session.title}</h3>
            <p className="text-sm text-gray-500">with {session.coach}</p>
            <p className="text-sm text-gray-500">
              {session.date} at {session.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}