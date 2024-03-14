import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Home() {
  return (
    <>
    <Navbar expand='lg' className='bg-body-teritary'>
    <Container className="mt-5">
      <Navbar.Brand href="/home"><h1>E-Learning</h1></Navbar.Brand>
        <Nav className='mx-1 me-auto d-flex flex-row justify-content-end'>
          <Nav.Link href="/courses">Course Catalog</Nav.Link>
          <Nav.Link href="/dashboard">User Dashboard</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
    </Container>
    </Navbar>
    <h3>Welcome to the Learning Platform!</h3>
    <p>
      <Button variant="primary">Learn more</Button>
    </p>
    </>
  );
}

export default Home;
