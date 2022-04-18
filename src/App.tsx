import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Home } from './Pages/Home';
import { Videosc } from './Pages/Videosc';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/videos" element={<Videosc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
