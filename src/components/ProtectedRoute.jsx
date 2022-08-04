import React from 'react';
import { Navigate, useOutlet } from 'react-router-dom';

function ProtectedRoute() {
  const isAuthenticated = localStorage.getItem('isAuthenticated');
  const outlet = useOutlet();

  if (!isAuthenticated) {
    return <Navigate to='/sign-in' />;
  }

  return <>{outlet}</>;
}

export default ProtectedRoute;
