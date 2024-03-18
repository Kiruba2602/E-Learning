//app.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.js';
import CourseCatalog from './components/CourseCatalog';
import CourseDetails from './components/CourseDetails';
import VideoPlayer from './components/VideoPlayer';
import QuizComponent from './components/QuizComponent';
import PrivateRoute from './components/PrivateRoute.js';
import Dashboard from './components/Dashboard';
import Home from './components/Home.js';
import DiscussionForum from './components/DiscussionForum.js';
import UpdateProfile from './components/UpdateProfile.js';
import ForgotPassword from './components/ForgotPassword.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className='content-container'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<CourseCatalog/>} />
        <Route path="/course/:id" element={<CourseDetails/>} />
        <Route path="/video/:id" element={<VideoPlayer/>} />
        <Route path="/quiz/:id" element={<QuizComponent/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/forgot-password" element={<ForgotPassword/>} />
        <Route path="/discussion" element={<DiscussionForum/>} />
        <PrivateRoute path="/dashboard" element={<Dashboard/>} />
        <PrivateRoute path="/update-profile" element={<UpdateProfile/>} />
      </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
