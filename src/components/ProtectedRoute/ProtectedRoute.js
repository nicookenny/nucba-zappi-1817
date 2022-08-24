import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export const ProtectedRoute = ({ children, to, state }) => {
  const { user } = useSelector(s => s.user);
  return user ? children : <Navigate to={to} state={state} />;
};
