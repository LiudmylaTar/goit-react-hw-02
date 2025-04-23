import { useState } from 'react';
import Feedback from './components/Feedback/Feedback';
import Options from './components/Options/Options';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Sip Happens Café</h1>
      <p>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
      <Options />
      <Feedback />
    </>
  );
}

export default App;
