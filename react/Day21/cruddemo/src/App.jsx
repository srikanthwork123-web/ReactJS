import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DepartmentList from './components/DepartmentList';
import DepartmentForm from './components/DepartmentForm';
import Navigation from './components/Navigation';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import OrdersList from './components/OrdersList';
import OrderForm from './components/OrderForm';
import NoRecordFound from './components/NoRecordFound';

function App() {
   return (
    <>
    
    <Router>
       <Navigation />  
        <div className="container mt-4">
          <Routes>
            {/* Department Routes */}
            <Route path="/departments" element={<DepartmentList />} />
            <Route path="/departments/add" element={<DepartmentForm />} />
            <Route path="/departments/edit/:id" element={<DepartmentForm />} />

            {/* Employee Routes */}
            <Route path="/employees" element={<EmployeeList />} />
            <Route path="/employees/add" element={<EmployeeForm />} />
            <Route path="/employees/edit/:id" element={<EmployeeForm />} />

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
