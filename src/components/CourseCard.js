//coursecard.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

function CourseCard({ course, handleViewCourse }) {
  return (
    <Card>
    <Card.Img variant="top" src={course.image} width="300px" height="200px"/>
    <Card.Body>
      <Card.Title>{course.title}</Card.Title>
      <Card.Text>
        {course.description}
      </Card.Text>
      <Button variant="primary" onClick={()=>handleViewCourse(course)}>View Course</Button>
    </Card.Body>
  </Card>
  );
}

export default CourseCard;