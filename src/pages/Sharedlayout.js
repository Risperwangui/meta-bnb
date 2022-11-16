import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarPage from '../components/NavbarPage';

const Sharedlayout = () => {
  return (
    <>
      <NavbarPage />
      <Outlet />
    </>
  );
};

export default Sharedlayout;