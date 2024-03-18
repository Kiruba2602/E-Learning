//coursedetails.js
import React, { useState, useEffect, useParams } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import VideoPlayer from './VideoPlayer';
import QuizComponent from './QuizComponent';

function CourseDetails({ match }) {
  const [course, setCourse] = useState(null);
  const [currentModule, setCurrentModule] = useState(0);
  const { id } = useParams();

  useEffect(() => {
    console.log('Course ID: ', id);
    axios.get(`/assets/courses.json/${id}`)
      .then(response => {
        console.log('Course details: ', response.data);
        setCourse(response.data);
      })
      .catch(error => {
        console.log('Error fetching course details: ', error);
      });
  }, [id]);

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
        <Card.VideoPlayer>{currentModule === 0 && <VideoPlayer video={course.modules[currentModule].video} />} </Card.VideoPlayer>
        <Card.VideoPlayer>{currentModule === 1 && <QuizComponent quiz={course.modules[currentModule].quiz} />} </Card.VideoPlayer>
        <Button variant="primary" onClick={handleNextModule}>Enroll</Button>
      </Card.Body>
    </Card>
  </Container>
  );
}

export default CourseDetails;