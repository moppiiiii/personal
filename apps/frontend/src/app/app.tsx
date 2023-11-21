import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/home/home';

import './app.css';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
