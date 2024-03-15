import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

function Home() {
  return (
    <>
    <Navbar expand='lg' className='bg-body-teritary'>
    <Container className="mt-2">
      <Navbar.Brand href="/home"><h1>E-Learning</h1></Navbar.Brand>
      <Navbar.Toggle />
        <Nav className='mb-3 d-flex flex-row justify-content-end'>
          <Nav.Link className='p-2' href="/courses">CourseCatalog</Nav.Link>
          <Nav.Link className='p-2' href="/dashboard">UserDashboard</Nav.Link>
          <Nav.Link className='p-2' href="/login">Login</Nav.Link> / <Nav.Link className='p-2' href="/register">Register</Nav.Link>
        </Nav>
    </Container>
    </Navbar>
    <div>
    <h3>Welcome to the Learning Platform! <Badge bg="secondary">Learn More!</Badge></h3>
    </div>
    </>
  );
}

export default Home;
