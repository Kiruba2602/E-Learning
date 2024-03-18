import { React , useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from 'react-bootstrap/Badge';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleLogin = (name) => {
    setIsLoggedIn(true);
    setUserName(name);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUserName('');
  };

  return (
    <>
    <Navbar expand='lg' className='bg-body-teritary'>
        <Container className="mt-2">
          <Navbar.Brand as={Link} to="/home"><h1>E-Learning</h1></Navbar.Brand>
          <Navbar.Toggle />
          <Nav className='mb-3 d-flex flex-row justify-content-end'>
            <Nav.Link className='p-2' as={Link} to="/courses">Courses</Nav.Link>
            {isLoggedIn ? (
              <NavDropdown title={userName} id="navbarScrollingDropdown">
                <NavDropdown.Item href="/dashboard">Dashboard</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <>
                <Nav.Link className='p-2' as={Link} onClick={handleLogin} to="/auth">Login</Nav.Link>
                <Nav.Link className='p-2' as={Link} to="/auth">Register</Nav.Link>
              </>
            )}
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
