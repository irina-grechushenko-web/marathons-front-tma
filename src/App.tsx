import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Routes as RoutesMap } from '@src/routes';
import { Home } from '@presentation/pages/Home';
import { Badgirl } from './presentation/pages/Marathons/Badgirl';
import { Reviews } from './presentation/pages/Reviews';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesMap.Home} element={<Home />} />
        <Route path={RoutesMap.Badgirl} element={<Badgirl />} />
        <Route path={RoutesMap.Reviews} element={<Reviews />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
