//app.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext.js';
import CourseCatalog from './components/CourseCatalog';
import CourseDetails from './components/CourseDetails';
import VideoPlayer from './components/VideoPlayer';
import QuizComponent from './components/QuizComponent';
import Dashboard from './components/Dashboard';
import Home from './components/Home.js';
import DiscussionForum from './components/DiscussionForum.js';
import Login from './components/Login.js';
import Signup from './components/Signup.js';
import CourseForm from './components/Courseform.js';

function App() {
  return (
    <AuthProvider>
    <Router>
      <div className='content-container'>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/courses" element={<CourseCatalog/>} />
        <Route path="/course/create" component={<CourseForm/>} />
        <Route path="/course/:id" element={<CourseDetails/>} />
        <Route path="/video/:id" element={<VideoPlayer/>} />
        <Route path="/quiz/:id" element={<QuizComponent/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/discussion" element={<DiscussionForum/>} />
        <Route path="/dashboard" element={ <Dashboard /> } />
      </Routes>
      </div>
    </Router>
    </AuthProvider>
  );
}

export default App;
