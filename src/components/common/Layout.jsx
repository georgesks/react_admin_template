import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="flex bg-gray-100">
      <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
        <div className="container mx-auto px-6 py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Layout;
