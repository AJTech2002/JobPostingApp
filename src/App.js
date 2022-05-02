import logo from './logo.svg';
import './App.css';
import LandingPage from './pages/LandingPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ViewJobPosting from './pages/ViewJobPosting';

function App() {
  return (
    <div className="App">
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
      </style>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/view" element={<ViewJobPosting />}>
            <Route path=":jobId" element={<ViewJobPosting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
