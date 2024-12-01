import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DynamicForm from './pages/DynamicForm';
import ConfirmationPage from './pages/ConfirmationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DynamicForm />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
