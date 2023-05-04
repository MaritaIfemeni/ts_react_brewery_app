import React from 'react';
import { Outlet } from 'react-router-dom';

const BreweriesPage = () => {
  return (
    <div>
      <div>BreweriesPage</div>
      <Outlet />
    </div>
  );
};

export default BreweriesPage;