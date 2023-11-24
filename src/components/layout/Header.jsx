import React from 'react';
// import { Search, Bell, UserCircle } from '@heroicons/react/24/outline';
import SearchIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon'
import BellIcon from '@heroicons/react/24/outline/BellIcon';
import UserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon';

const Header = () => {
  return (
    <div className="bg-white shadow w-full">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-8">
          {/* Contenido del header como el buscador, notificaciones, perfil, etc */}
          <div className="flex items-center">
            <SearchIcon className="h-5 w-5 text-gray-500" />
            <input className="ml-2 p-2 border rounded-md" placeholder="Search..." />
          </div>
          <div className="flex items-center">
            <BellIcon className="h-6 w-6 text-gray-500" />
            <UserCircleIcon className="h-6 w-6 text-gray-500 ml-4" />
            {/* Más iconos o componentes aquí */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
