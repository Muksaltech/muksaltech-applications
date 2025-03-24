import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import App1 from './apps/App1/App1';
import App2 from './apps/App2/App2';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps/App1/App1" element={<App1 />} />
        <Route path="/apps/App2/App2" element={<App2 />} />
      </Routes>
    </Router>
  );
}
export default App;