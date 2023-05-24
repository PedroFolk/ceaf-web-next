import { FC } from 'react';
import { useRouter } from 'next/router';

import Home from '../pages/PagInicial';

const Routes: FC = () => {
  const router = useRouter();

  const handleRouteChange = (url: string) => {
    console.log('Route changed:', url);
    // Implement any logic you need when the route changes
  };

  if (router.events) {
    router.events.on('routeChangeComplete', handleRouteChange);
  }

  return (
    <>
      {router.pathname === '/' && <Home />}
      {router.pathname === '/pagSelecao' && <Home />}
      {router.pathname === '/usuario' && <Home />}
    </>
  );
};

export default Routes;