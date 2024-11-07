import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Trophy, Clock, Star, Calendar } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import CourseProgress from '../components/student/CourseProgress';
import UpcomingSessions from '../components/student/UpcomingSessions';
import AssignmentList from '../components/student/AssignmentList';

export default function StudentDashboard() {
  return (
    <DashboardLayout>
      <div className="p-6 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
        >
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-4">
              <BookOpen className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-sm font-medium text-gray-500">Active Courses</h3>
                <p className="text-2xl font-bold">3</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-4">
              <Trophy className="h-8 w-8 text-yellow-600" />
              <div>
                <h3 className="text-sm font-medium text-gray-500">Achievements</h3>
                <p className="text-2xl font-bold">12</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-4">
              <Clock className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="text-sm font-medium text-gray-500">Study Hours</h3>
                <p className="text-2xl font-bold">28</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-4">
              <Star className="h-8 w-8 text-purple-600" />
              <div>
                <h3 className="text-sm font-medium text-gray-500">Average Score</h3>
                <p className="text-2xl font-bold">92%</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <h2 className="text-lg font-semibold mb-4">Course Progress</h2>
            <CourseProgress />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <h2 className="text-lg font-semibold mb-4">Upcoming Sessions</h2>
            <UpcomingSessions />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2"
          >
            <h2 className="text-lg font-semibold mb-4">Assignments</h2>
            <AssignmentList />
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}