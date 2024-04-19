import React from 'react';
import { Outlet } from 'react-router-dom';
import { SLayout, SHeader, SMain, SLink } from './Layout.styled';

export const Layout = () => {
  return (
    <SLayout>
      <SHeader>
        <SLink to="/">Секундомер</SLink>
        <SLink to="/timer">Таймер</SLink>
      </SHeader>
      <SMain>
        <Outlet />
      </SMain>
    </SLayout>
  );
};
