import React from 'react';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';

export default function AssignmentOverview() {
  const assignments = [
    {
      id: 1,
      title: 'Resume Building Workshop',
      course: 'Career Development 101',
      dueDate: 'Mar 20, 2024',
      submitted: 32,
      total: 45,
    },
    {
      id: 2,
      title: 'LinkedIn Profile Review',
      course: 'Professional Networking',
      dueDate: 'Mar 22, 2024',
      submitted: 28,
      total: 38,
    },
    {
      id: 3,
      title: 'Mock Interview Analysis',
      course: 'Interview Mastery',
      dueDate: 'Mar 25, 2024',
      submitted: 45,
      total: 52,
    },
  ];

  return (
    <div className="space-y-4">
      {assignments.map((assignment) => (
        <div
          key={assignment.id}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
        >
          <div>
            <h3 className="font-medium">{assignment.title}</h3>
            <p className="text-sm text-gray-500">{assignment.course}</p>
            <p className="text-sm text-gray-500">Due: {assignment.dueDate}</p>
          </div>
          <div className="flex items-center space-x-8">
            <div className="text-center">
              <p className="text-sm text-gray-500">Submitted</p>
              <p className="font-medium">{assignment.submitted}/{assignment.total}</p>
            </div>
            <div className="flex items-center space-x-2">
              {assignment.submitted === assignment.total ? (
                <CheckCircle2 className="h-6 w-6 text-green-500" />
              ) : assignment.submitted >= assignment.total / 2 ? (
                <Clock className="h-6 w-6 text-yellow-500" />
              ) : (
                <AlertCircle className="h-6 w-6 text-red-500" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}