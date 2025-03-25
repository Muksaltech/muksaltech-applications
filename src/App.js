import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IdentifyThis from './apps/identify-this/src/IdentifyThis';
import App2 from './apps/App2/App2';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps/identify-this/IdentifyThis" element={<IdentifyThis />} /> 
        <Route path="/apps/App2/App2" element={<App2 />} />
      </Routes>
    </Router>
  );
}
export default App;