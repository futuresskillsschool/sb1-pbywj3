import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
  role: 'coach' | 'student' | 'teacher';
}

export default function ProtectedRoute({ children, role }: ProtectedRouteProps) {
  // This is a mock authentication check. In a real app, you'd check against your auth system
  const isAuthenticated = localStorage.getItem('auth_token');
  const userRole = localStorage.getItem('user_role');

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (userRole !== role) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
}