//coursecatalog.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import CourseCard from './CourseCard';


function CourseCatalog() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    axios.get('/assets/courses.json')
      .then(response => {
        setCourses(response.data);
      })
      .catch(error => {
        console.log('Error fetching courses: ', error);
      });
  }, []);

  return (
    <Container className="mt-5">
      <Row>
        {courses.map((course) => (
          <Col md={4} key={course.id}>
            <CourseCard key={course.id} course={course} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default CourseCatalog;