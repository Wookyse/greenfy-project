import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Pages/Login';
import { Home } from './Pages/Home';
import { Videosc } from './Pages/Videosc';
import { Articles } from './Pages/Articles';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home/videos" element={<Videosc />} />
        <Route path="/home/article" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
