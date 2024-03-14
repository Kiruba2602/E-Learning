//coursecard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CourseCard({ course }) {
  return (
    <Card>
    <Card.Img variant="top" src={course.image} />
    <Card.Body>
      <Card.Title>{course.title}</Card.Title>
      <Card.Text>
        {course.description}
      </Card.Text>
      <Button variant="primary">View Course</Button>
    </Card.Body>
  </Card>
  );
}

export default CourseCard;