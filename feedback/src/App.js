import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FeedbackItem from './components/FeedbackItem';
import FeedbackList from './components/FeedbackList';
import {useState} from 'react'
import FeedbackData from './data/FeedbackData';
import Card from './components/shared/Card';


function App() {

  const [feedback, setFeedback] = useState(FeedbackData)


  return (
    <>
      <Header text='Feedback UI' />
      <div className="container"> 
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
}

export default App;
