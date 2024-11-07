import React from 'react';
import { BookOpen } from 'lucide-react';

export default function CourseManagement() {
  const courses = [
    {
      id: 1,
      title: 'Career Development 101',
      students: 45,
      progress: 75,
    },
    {
      id: 2,
      title: 'Professional Networking',
      students: 38,
      progress: 60,
    },
    {
      id: 3,
      title: 'Interview Mastery',
      students: 52,
      progress: 40,
    },
  ];

  return (
    <div className="space-y-4">
      {courses.map((course) => (
        <div
          key={course.id}
          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition"
        >
          <div className="flex items-center space-x-4">
            <BookOpen className="h-6 w-6 text-indigo-600" />
            <div>
              <h3 className="font-medium">{course.title}</h3>
              <p className="text-sm text-gray-500">{course.students} students</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-32 h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-indigo-600 rounded-full"
                style={{ width: `${course.progress}%` }}
              />
            </div>
            <span className="text-sm font-medium text-gray-600">
              {course.progress}%
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}