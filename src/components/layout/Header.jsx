import React from 'react';
// import { Search, Bell, UserCircle } from '@heroicons/react/24/outline';
import SearchIcon from '@heroicons/react/24/outline/MagnifyingGlassIcon'
import BellIcon from '@heroicons/react/24/outline/BellIcon';
import UserCircleIcon from '@heroicons/react/24/outline/UserCircleIcon';

const Header = () => {
  return (
    <div className="bg-white shadow w-full">
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-8"> {/* Ajusta la altura si es necesario */}
          {/* Espacio reservado para el logo */}
          <div className="flex items-center">
            {/* Puedes añadir un texto provisional o dejar el div vacío */}
            <div className="bg-gray-300 text-gray-700 text-sm font-semibold py-1 px-3 rounded-lg">
              Logo
            </div>
          </div>          
          {/* Iconos del header como notificaciones, perfil, etc */}
          <div className="flex items-center">
            <BellIcon className="h-8 w-8 text-gray-500" />
            <UserCircleIcon className="h-8 w-8 text-gray-500 ml-4" />
            {/* Más iconos o componentes aquí */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
