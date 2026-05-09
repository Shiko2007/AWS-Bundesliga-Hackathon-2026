import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import TeamBuilder from './TeamBuilder';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/team-builder" element={<TeamBuilder />} />
    </Routes>
  );
}

export default App;