//app.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CourseCatalog from './components/CourseCatalog';
import CourseDetails from './components/CourseDetails';
import VideoPlayer from './components/VideoPlayer';
import QuizComponent from './components/QuizComponent';
import UserDashboard from './components/UserDashboard';
import Home from './components/Home.js';
import Login from './components/Login.js'
import DiscussionForum from './components/DiscussionForum.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/courses" element={<CourseCatalog/>} />
        <Route path="/course/:id" element={<CourseDetails/>} />
        <Route path="/video/:id" element={<VideoPlayer/>} />
        <Route path="/quiz/:id" element={<QuizComponent/>} />
        <Route path="/dashboard" element={<UserDashboard/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/discussion" element={<DiscussionForum/>} />
      </Routes>
    </Router>
  );
}

export default App;
