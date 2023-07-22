import './App.css';
import Conversation from './components/Conversation';
import { Route,Routes } from 'react-router-dom';
import SignIn from './routes/sign-in';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<SignIn/>}/>
    <Route path='/chatroom' element={<Conversation/>}/>
    
      </Routes>
    </div>
  );
}

export default App;
