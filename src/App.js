import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import E2EEPolicy from './pages/E2EEPolicy';
import RefundPolicy from './pages/RefundPolicy';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import YoutubeMonetization from "./pages/YoutubeMonetization";

function App() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/e2ee' element={<E2EEPolicy />} />
          <Route path='/refund' element={<RefundPolicy />} />
          <Route path='/privacy' element={<PrivacyPolicy />} />
          <Route path='/youtubeMonetization' element={<YoutubeMonetization />} />
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
