import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import Players from './Players'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/players" element={<Players />} />
    </Routes>
  );
}

export default App;

