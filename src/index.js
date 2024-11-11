import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import User from './pages/User';
import SocietyHead from './pages/SocietyHead';
import ChatAppPage from './pages/LiveChat';
import SocietyPosts from './pages/SocietyPosts';
import Society from './pages/Society';
import CreatePost from './pages/CreatePost';
import UpdatePost from './pages/UpdatePost';
import DeletePost from './pages/DeletePost';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <div className="App">
    <Routes>
    <Route path="/" element={<App />} />
    <Route path="/user" element={<User />} />
    <Route path="/societyhead" element={<SocietyHead />} />
    <Route path="/livechat" element={<ChatAppPage />} />
    <Route path="/societyPosts" element={<SocietyPosts />} />
    <Route path="/society" element={<Society />} />
    <Route path="/createPost" element={<CreatePost />} />
    <Route path="/updatePost" element={<UpdatePost />} />
    <Route path="/deletePost" element={<DeletePost />} />
    </Routes>
  </div>
</Router>
);

