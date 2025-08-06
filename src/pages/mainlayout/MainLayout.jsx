import React from 'react';
import { Outlet } from 'react-router';

const MainLayout = () => {
  return (
    <div>
      <div>
        
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default MainLayout;