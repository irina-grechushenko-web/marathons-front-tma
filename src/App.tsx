import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Routes as RoutesMap } from '@src/routes';
import { Home } from '@presentation/pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesMap.Home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
