import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import IdentifyThis from './apps/identify-this/src/IdentifyThis';
import MultiStepForm from './apps/multi-step-form/src/MultiStepForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps/identify-this/IdentifyThis" element={<IdentifyThis />} /> 
        <Route path="/apps/multi-step-form/MultiStepForm/*" element={<MultiStepForm />} />
      </Routes>
    </Router>
  );
}
export default App;