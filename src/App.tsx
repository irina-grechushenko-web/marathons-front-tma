import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Routes as RoutesMap } from '@src/routes';
import { Home } from '@presentation/pages/Home';
import { Badgirl } from './presentation/pages/Marathons/Badgirl/Main';
import { Reviews } from './presentation/pages/Marathons/Badgirl/Reviews';
import { Diagnostics } from './presentation/pages/Marathons/Badgirl/Diagnostics';
import { Quiz } from './presentation/pages/Marathons/Badgirl/Quiz';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesMap.Home} element={<Home />} />
        <Route path={RoutesMap.Badgirl} element={<Badgirl />} />
        <Route path={RoutesMap.Reviews} element={<Reviews />} />
        <Route path={RoutesMap.Diagnostics} element={<Diagnostics />} />
        <Route path={RoutesMap.Quiz} element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
