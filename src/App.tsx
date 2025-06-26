import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Routes as RoutesMap } from '@src/routes';
import { Home } from '@presentation/pages/Home';
import { Badgirl } from './presentation/pages/Marathons/Badgirl/Main';
import { Reviews } from './presentation/pages/Marathons/Badgirl/Reviews';
import { Diagnostics } from './presentation/pages/Marathons/Badgirl/Diagnostics';
import { Quiz } from './presentation/pages/Marathons/Badgirl/Quiz';
import { Day1 } from './presentation/pages/Marathons/Badgirl/Day1';
import { Day2 } from './presentation/pages/Marathons/Badgirl/Day2';
import { Day3 } from './presentation/pages/Marathons/Badgirl/Day3';
import { Instructions } from './presentation/pages/Marathons/Badgirl/Instructions';
import { Day4 } from './presentation/pages/Marathons/Badgirl/Day4';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesMap.Home} element={<Home />} />
        <Route path={RoutesMap.Badgirl} element={<Badgirl />} />
        <Route path={RoutesMap.Reviews} element={<Reviews />} />
        <Route path={RoutesMap.Diagnostics} element={<Diagnostics />} />
        <Route path={RoutesMap.Quiz} element={<Quiz />} />
        <Route path={RoutesMap.Day1} element={<Day1 />} />
        <Route path={RoutesMap.Day2} element={<Day2 />} />
        <Route path={RoutesMap.Day3} element={<Day3 />} />
        <Route path={RoutesMap.Day4} element={<Day4 />} />
        <Route path={RoutesMap.Instructions} element={<Instructions />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
