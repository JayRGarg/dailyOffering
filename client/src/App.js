import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Message from './pages/Message';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/message" exact element={<Message/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
