import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Message from './pages/Message';

import { MessageContext } from './Helper/Context';
import { useState } from 'react';

function App() {
  const [messageData, setMessageData] = useState({});
  return (
    <MessageContext.Provider value={{messageData, setMessageData}}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home/>} />
            <Route path="/message" exact element={<Message/>} />
          </Routes>
        </Router>
      </div>
    </MessageContext.Provider>
  );
}

export default App;
