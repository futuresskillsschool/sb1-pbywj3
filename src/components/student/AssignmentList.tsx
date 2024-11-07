import React from 'react';
import { Clock } from 'lucide-react';

export default function AssignmentList() {
  const assignments = [
    {
      id: 1,
      title: 'Resume Building Workshop',
      dueDate: 'Mar 20, 2024',
      status: 'In Progress',
      progress: 60,
    },
    {
      id: 2,
      title: 'LinkedIn Profile Optimization',
      dueDate: 'Mar 22, 2024',
      status: 'Not Started',
      progress: 0,
    },
    {
      id: 3,
      title: 'Mock Interview Recording',
      dueDate: 'Mar 25, 2024',
      status: 'Completed',
      progress: 100,
    },
  ];

  return (
    <div className="space-y-4">
      {assignments.map((assignment) => (
        <div
          key={assignment.id}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
        >
          <div className="flex items-center space-x-4">
            <Clock className="h-6 w-6 text-indigo-600" />
            <div>
              <h3 className="font-medium">{assignment.title}</h3>
              <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-32 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-indigo-600 rounded-full"
                style={{ width: `${assignment.progress}%` }}
              />
            </div>
            <span className="text-sm font-medium text-gray-600">
              {assignment.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}