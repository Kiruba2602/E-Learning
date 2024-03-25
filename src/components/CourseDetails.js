//coursedetails.js
import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import VideoPlayer from './VideoPlayer';
import QuizComponent from './QuizComponent';
import { useParams } from 'react-router-dom';

function CourseDetails() {
  const [course, setCourse] = useState(null);
  const { id } = useParams();
  const [currentModuleIndex, setCurrentModuleIndex] = useState(0);

  useEffect(() => {
    fetch(`${process.env.PUBLIC_URL}/assets/courses.json/${id}`) // Assuming courses.json is a local file and contains an array of courses.
      .then(response => response.json())
      .then(data => {
        // Find the course with the matching id.
        const foundCourse = data.find(course => course.id.toString() === id);
        if (foundCourse) {
          setCourse(foundCourse);
        } else {
          console.error('Course not found');
        }
      })
      .catch(error => {
        console.log('Error fetching courses: ', error);
      });
  }, [id]);

  const handleNextModule = () => {
    setCurrentModuleIndex((prevIndex) => (prevIndex + 1) % course.modules.length);
  };

  if (!course) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-5">
      <Card>
        <Card.Img variant="top" src={course.image} />
        <Card.Body>
          <Card.Title>{course.title}</Card.Title>
          <Card.Text>{course.description}</Card.Text>
          {course.modules.map((module, index) => (
            <React.Fragment key={index}>
              {module.video && <VideoPlayer video={module.video} />}
              {module.quiz && <QuizComponent quiz={module.quiz} />}
            </React.Fragment>
          ))}
          <Button variant="primary" onClick={handleNextModule}>Next Module</Button>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default CourseDetails;