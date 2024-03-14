//userdashboard.js
import React, { useState, useEffect } from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import axios from 'axios';

function UserDashboard() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('./assets/courses.json')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.log('Error fetching user courses: ', error);
      });
  }, []);

  return (
    <Container className="mt-5">
      <h2>My Courses</h2>
      {courses.map((course, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{course.title}</Card.Title>
            <Button variant="primary">Go to Course</Button>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default UserDashboard;