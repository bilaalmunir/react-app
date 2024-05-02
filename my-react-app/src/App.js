import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './login';
import HomePage from './hom';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Login route */}
        <Route path="/LoginPage" element={<LoginPage />} />

        {/* Home route (protected) */}
        <Route path="/HomePage" element={<ProtectedRoute />} />
        
        {/* Redirect to login if accessing undefined routes */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
};

const ProtectedRoute = () => {
  const isLoggedIn = localStorage.getItem('isLoggedIn'); // Check authentication status here

  return isLoggedIn ? <HomePage /> : <Navigate to="/login" replace />;
};

export default App;
