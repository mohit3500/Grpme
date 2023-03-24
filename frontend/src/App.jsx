import Login from './pages/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Registration from './pages/Registration';
import ChatPage from './pages/ChatPage';
import Home from './pages/Home';
import ProfilePage from './pages/ProfilePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/chats" element={<ChatPage />} />
        <Route path="/chats/message" element={<ChatPage />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
