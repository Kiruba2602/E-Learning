//home.js
import { React } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap'
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';
import About from './About';
import { SocialIcon } from 'react-social-icons';
import useAuth from '../contexts/AuthContext';
import { doSignOut } from '../firebase/auth';

function Home() {
  
  const navigate = useNavigate()
  const { userLoggedIn } = useAuth()

  return (
    <>
    <Navbar expand='lg' className='bg-body-teritary bg-secondary'>
        <Container className="mt-2">
          <Navbar.Brand as={Link} to="/"><h1>E-Learning</h1></Navbar.Brand>

          <Nav className='mb-3 d-flex flex-row justify-content-end'>
            <Nav.Link className='p-2' as={Link} to="/courses">Courses</Nav.Link>
            <Nav.Link className='p-2' as={Link} to="/#about">About</Nav.Link>
            {userLoggedIn ? (
              <NavDropdown title={userLoggedIn} id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/dashboard">Dashboard</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={() => doSignOut().then(() => navigate('/login'))}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link className='p-2' as={Link} to="/login">Login</Nav.Link>
                <Nav.Link className='p-2' as={Link} to="/signup">Register</Nav.Link>
              </>
            )}
          </Nav> 
        </Container>
      </Navbar>
      <Container className='mt-5'>
        <h3>Welcome to the Learning Platform! <Badge bg="secondary">Learn More!</Badge></h3>
      </Container>
      <About id="about"/>
      <Footer />
    </>
  );
}

const Footer = () => {
  return (
    <div className="footer">
      <Container className='bg-dark'>
        <Row className="align-items-center">
          <Col>
            <Nav.Link className="p-2 text-white" as={Link} to="/courses">
              Courses
            </Nav.Link>
            <Nav.Link className="p-2 text-white" as={Link} to="/#about">
              About
            </Nav.Link>
            <Nav.Link className="p-2 text-white" as={Link} to="/login">
                  Login
            </Nav.Link>
            <Nav.Link className="p-2 text-white" as={Link} to="/signup">
                  Register
            </Nav.Link>
          </Col>
          <Col className="text-start justify-content-around">
            <SocialIcon url="https://www.instagram.com" className="me-2" />
            <SocialIcon url="https://www.facebook.com" className="me-2" />
            <SocialIcon url="https://www.twitter.com" className="me-2" />
            <SocialIcon url="https://mail.google.com" className="me-2" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
