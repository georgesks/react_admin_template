import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@heroicons/react/24/outline/HomeIcon';
import ShoppingBagIcon from '@heroicons/react/24/outline/ShoppingBagIcon';
import CogIcon from '@heroicons/react/24/outline/CogIcon';
import './Sidebar.css';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <div
      className={`flex flex-col ${isCollapsed ? 'w-16' : 'w-64'} h-full bg-gray-800 text-white px-4 transition-width duration-300`}
      onMouseEnter={() => setIsCollapsed(false)}
      onMouseLeave={() => setIsCollapsed(true)}
    >
      <nav className="mt-5">
        <Link to="/page1" className="flex items-center space-x-2 sidebar-link">
          <HomeIcon className="h-5 w-5" />
          <span>Page 1</span>
        </Link>
        <Link to="/page2" className="flex items-center space-x-2 sidebar-link">
          <ShoppingBagIcon className="h-5 w-5" />
          <span>Page 2</span>
        </Link>
        <Link to="/page3" className="flex items-center space-x-2 sidebar-link">
          <CogIcon className="h-5 w-5" />
          <span>Page 3</span>
        </Link>        
      </nav>
    </div>
  );
};

export default Sidebar;
