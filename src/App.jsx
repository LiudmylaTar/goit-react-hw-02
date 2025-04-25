import { useState, useEffect } from 'react';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';
import Notification from './components/Notification/Notification';

import './App.css';
import { createWebSocketModuleRunnerTransport } from 'vite/module-runner';

function App() {
  const storedVotes = JSON.parse(localStorage.getItem('votesCount'));

  const [voutesCount, setVoutesCount] = useState(
    storedVotes || {
      good: 0,
      neutral: 0,
      bad: 0,
    },
  );

  useEffect(() => {
    localStorage.setItem('votesCount', JSON.stringify(voutesCount));
  }, [voutesCount]);

  const updateFeedback = (feedbackType) => {
    setVoutesCount((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const totalFeedback =
    voutesCount.good + voutesCount.neutral + voutesCount.bad;
  const positiveFeedback = Math.round((voutesCount.good / totalFeedback) * 100);

  const resetFeedback = () => {
    setVoutesCount({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  return (
    <div className="container">
      <h1 className="main_header">Sip Happens Café</h1>
      <p className="text">
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback votes={voutesCount} positive={positiveFeedback} />
      )}
    </div>
  );
}

export default App;
