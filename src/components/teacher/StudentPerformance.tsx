import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', avgScore: 78 },
  { month: 'Feb', avgScore: 82 },
  { month: 'Mar', avgScore: 85 },
  { month: 'Apr', avgScore: 89 },
];

export default function StudentPerformance() {
  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="avgScore" stroke="#4f46e5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}