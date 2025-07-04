import { HashRouter, Routes, Route } from 'react-router-dom';

import Home   from './pages/Home';
import Links  from './pages/Links';
import Error  from './pages/Error';

function RoutesApp() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/"       element={<Home />}  />
        <Route path="/links"  element={<Links />} />
        <Route path="*"       element={<Error />} />
      </Routes>
    </HashRouter>
  );
}

export default RoutesApp;