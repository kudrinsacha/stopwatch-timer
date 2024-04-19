import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout/Layout';
import { Stopwatch } from './pages/Stopwatch/Stopwatch';
import { Timer } from './pages/Timer/Timer';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Stopwatch />} />
        <Route path="/timer" element={<Timer />} />
        <Route path="*" element={<Stopwatch />} />
      </Route>
    </Routes>
  );
};
