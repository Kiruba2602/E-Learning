//coursedetails.js
import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';
import QuizComponent from './QuizComponent';

function CourseDetails({ match }) {
  const [course, setCourse] = useState(null);
  const [currentModule, setCurrentModule] = useState(0);

  useEffect(() => {
    console.log('Course ID: ', match.params.id);
    axios.get(`assets/courses.json/${match.params.id}`)
      .then(response => {
        console.log('Course details: ', response.data);
        setCourse(response.data);
      })
      .catch(error => {
        console.log('Error fetching course details: ', error);
      });
  }, [match.params.id]);

  if (!course) {
    return <div>Loading...</div>;
  }

  const handleNextModule = () => {
    setCurrentModule(currentModule + 1);
  };

  return (
    <Container className="mt-5">
    <Card>
      <Card.Img variant="top" src={course.image} />
      <Card.Body>
        <Card.Title>{course.title}</Card.Title>
        <Card.Text>{course.description}</Card.Text>
        {currentModule === 0 && <VideoPlayer video={course.modules[currentModule].video} />}
        {currentModule === 1 && <QuizComponent quiz={course.modules[currentModule].quiz} />}
        <Button variant="primary" onClick={handleNextModule}>Enroll</Button>
      </Card.Body>
    </Card>
  </Container>
  );
}

export default CourseDetails;