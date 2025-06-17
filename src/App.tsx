import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Routes as RoutesMap } from '@src/routes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesMap.Home} element={<div>Халлоу</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
