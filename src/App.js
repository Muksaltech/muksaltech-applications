import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ImageQuiz from './apps/image-quiz/src/ImageQuiz';
import MultiStepForm from './apps/multi-step-form/src/MultiStepForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps/image-quiz/ImageQuiz" element={<ImageQuiz />} /> 
        <Route path="/apps/multi-step-form/MultiStepForm/*" element={<MultiStepForm />} />
      </Routes>
    </Router>
  );
}
export default App;