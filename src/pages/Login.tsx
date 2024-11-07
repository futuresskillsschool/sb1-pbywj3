import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [role, setRole] = useState<'coach' | 'student' | 'teacher'>('student');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login/register - in a real app, you'd authenticate with your backend
    localStorage.setItem('auth_token', 'mock_token');
    localStorage.setItem('user_role', role);
    navigate(`/${role}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-8 rounded-xl shadow-xl max-w-md w-full"
      >
        <div className="flex justify-center mb-8">
          <GraduationCap className="h-12 w-12 text-indigo-600" />
        </div>
        <h2 className="text-2xl font-bold text-center mb-8">
          {isLogin ? 'Login to Future Skills' : 'Create Your Account'}
        </h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Role
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value as 'coach' | 'student' | 'teacher')}
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500"
            >
              <option value="student">Student</option>
              <option value="coach">Coach</option>
              <option value="teacher">Teacher</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              required
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              required
              className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                required
                className="w-full px-4 py-2 rounded-lg border focus:ring-2 focus:ring-indigo-500"
                placeholder="Confirm your password"
              />
            </div>
          )}
          
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition"
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-indigo-600 hover:text-indigo-700 font-medium"
          >
            {isLogin ? "Don't have an account? Register" : 'Already have an account? Login'}
          </button>
        </div>

        {isLogin && (
          <div className="mt-4 text-center">
            <button className="text-gray-500 hover:text-gray-700 text-sm">
              Forgot your password?
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}