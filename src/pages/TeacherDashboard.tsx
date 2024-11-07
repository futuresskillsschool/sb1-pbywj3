import React from 'react';
import { motion } from 'framer-motion';
import { Users, BookOpen, CheckCircle2, MessageCircle } from 'lucide-react';
import DashboardLayout from '../components/DashboardLayout';
import StudentPerformance from '../components/teacher/StudentPerformance';
import CourseManagement from '../components/teacher/CourseManagement';
import AssignmentOverview from '../components/teacher/AssignmentOverview';

export default function TeacherDashboard() {
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
              <Users className="h-8 w-8 text-blue-600" />
              <div>
                <h3 className="text-sm font-medium text-gray-500">Total Students</h3>
                <p className="text-2xl font-bold">156</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-4">
              <BookOpen className="h-8 w-8 text-green-600" />
              <div>
                <h3 className="text-sm font-medium text-gray-500">Active Courses</h3>
                <p className="text-2xl font-bold">8</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-4">
              <CheckCircle2 className="h-8 w-8 text-yellow-600" />
              <div>
                <h3 className="text-sm font-medium text-gray-500">Assignments</h3>
                <p className="text-2xl font-bold">24</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <div className="flex items-center space-x-4">
              <MessageCircle className="h-8 w-8 text-purple-600" />
              <div>
                <h3 className="text-sm font-medium text-gray-500">Messages</h3>
                <p className="text-2xl font-bold">12</p>
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
            <h2 className="text-lg font-semibold mb-4">Student Performance</h2>
            <StudentPerformance />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-6 rounded-xl shadow-sm"
          >
            <h2 className="text-lg font-semibold mb-4">Course Management</h2>
            <CourseManagement />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-sm lg:col-span-2"
          >
            <h2 className="text-lg font-semibold mb-4">Assignment Overview</h2>
            <AssignmentOverview />
          </motion.div>
        </div>
      </div>
    </DashboardLayout>
  );
}