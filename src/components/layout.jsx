import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from './nav';

export const Layout = () => {
  return (
    <>
      <main>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </main>
      <footer style={{ position: 'absolute', bottom: 0, width: '100%' }}>
        <Nav />
      </footer>
    </>
  );
};
