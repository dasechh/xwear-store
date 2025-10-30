import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/search" element={<HomePage />} />
        <Route path="/calculator" element={<HomePage />} />
        <Route path="/favourite" element={<HomePage />} />
        <Route path="/profile" element={<HomePage />} />
        <Route path="/cart" element={<HomePage />} />
        <Route path="/catalog/*" element={<HomePage />} />
        <Route path="/shipping" element={<HomePage />} />
        <Route path="/payment" element={<HomePage />} />
        <Route path="/blog" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
        <Route path="/privacy" element={<HomePage />} />
        <Route path="/terms" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
