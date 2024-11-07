import React from 'react';

interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

export default function TestimonialCard({ name, role, content, image }: TestimonialProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 transform transition duration-500 hover:scale-105">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-12 h-12 rounded-full object-cover" />
        <div className="ml-4">
          <h4 className="font-semibold text-lg">{name}</h4>
          <p className="text-gray-600 text-sm">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 italic">{content}</p>
    </div>
  );
}