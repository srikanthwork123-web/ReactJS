import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import DepartmentList from './components/DepartmentList';
import DepartmentForm from './components/DepartmentForm';
import Navigation from './components/Navigation';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import OrdersList from './components/OrdersList';
import OrderForm from './components/OrderForm';
import NoRecordFound from './components/NoRecordFound';
import Login from './components/Login';
import AuthService from './services/AuthService';

function RequireAuth({ children }) {
  console.log(AuthService.isAuthenticated());
  return AuthService.isAuthenticated() ? children : <Navigate to="/" replace />;
}

function App() {
   return (
    <>
    
    <Router>
       <Navigation />  
        <div className="container mt-4">
          <Routes>
            {/* Login Routes */}
            <Route path="/" element={<Login />} />

            {/* Department Routes */}
            <Route path="/departments" element={<DepartmentList />} />
            <Route path="/departments/add" element={<DepartmentForm />} />
            <Route path="/departments/edit/:id" element={<DepartmentForm />} />

            {/* Employee Routes */}
            <Route path="/employees" element={<RequireAuth><EmployeeList /></RequireAuth>} />
            <Route path="/employees/add" element={<RequireAuth><EmployeeForm /></RequireAuth>} />
            <Route path="/employees/edit/:id" element={<RequireAuth><EmployeeForm /></RequireAuth>} />

            {/* Order Routes */}
            <Route path="/orders" element={<OrdersList />} />
            <Route path="/orders/add" element={<OrderForm />} />
            <Route path="/orders/edit/:id" element={<OrderForm />} />

            <Route path="*" element={<NoRecordFound />} />
          </Routes>
        </div> 
      </Router>
      </>
   );
}

export default App
