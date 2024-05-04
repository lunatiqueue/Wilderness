import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout';

const Home = lazy(() => import('./pages/home'));
const Forests = lazy(() => import('./pages/forests'));
const Mountains = lazy(() => import('./pages/mountains'));
const Lakes = lazy(() => import('./pages/lakes'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/forests" element={<Forests />} />
        <Route path="/mountains" element={<Mountains />} />
        <Route path="/lakes" element={<Lakes />} />
      </Route>
    </Routes>
  );
};
