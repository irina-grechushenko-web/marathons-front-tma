import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Routes as RoutesMap } from '@src/routes';
import { Home } from '@presentation/pages/Home';
import { Badgirl } from './presentation/pages/Marathons/Badgirl';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesMap.Home} element={<Home />} />
        <Route path={RoutesMap.Badgirl} element={<Badgirl />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
