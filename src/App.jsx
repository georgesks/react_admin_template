import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import AppRoutes from './routes';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <Header /> {/* Asumiendo que Header no es flex-1 */}
        <div className="flex flex-1 overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto bg-gray-200">
            <AppRoutes />
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
