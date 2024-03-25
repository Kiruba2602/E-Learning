//coursecatalog.js
import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CourseCard from './CourseCard';
import CourseDetails from './CourseDetails';
import { useParams } from 'react-router-dom';

function CourseCatalog() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetch('/assets/courses.json')
      .then(response => response.json())
      .then(data => {
        setCourses(data);
      })
      .catch(error => {
        console.log('Error fetching courses: ', error);
      });
  }, []);

  useEffect(() => {
    if (id && courses.length > 0) {
      setSelectedCourse(courses.find(course => course.id === parseInt(id)));
    } else {
      setSelectedCourse(null);
    }
  }, [id, courses]);

  //const selectedCourse = courses.find(course => course.id === parseInt(id));

  function handleViewCourse(course){
    setSelectedCourse(course);
  };

  return (
    <Container className="mt-5">
      <Row>
        {courses.map((course) => (
          <Col md={4} key={course.id}>
            <CourseCard key={course.id} course={course} handleViewCourse={handleViewCourse} />
          </Col>
        ))}
      </Row>
      {selectedCourse && (<CourseDetails course={setSelectedCourse} />)}
    </Container>
  );
}

export default CourseCatalog;