import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<HomePage />} />
        <Route path="/search" element={<HomePage />} />
        <Route path="/calculator" element={<HomePage />} />
        <Route path="/favourite" element={<HomePage />} />
        <Route path="/profile" element={<HomePage />} />
        <Route path="/cart" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
