import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import AboutPage from './pages/AboutPage';
import Home from './components/Home';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext'




function App() {

  return (
    <FeedbackProvider>
      <Router>
        <Header text='Feedback UI' />
        <div className='container'>
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
