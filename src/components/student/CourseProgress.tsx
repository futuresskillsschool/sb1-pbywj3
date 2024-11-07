import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Web Dev', progress: 85 },
  { name: 'UI/UX', progress: 65 },
  { name: 'DevOps', progress: 45 },
];

export default function CourseProgress() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="progress" fill="#4f46e5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}