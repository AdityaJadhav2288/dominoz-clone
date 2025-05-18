import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Pages/UserContext';
import logo from '../Images/logo.png';

function Header() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm('Are you sure you want to log out?');
    if (confirmLogout) {
      setUser(null); // Clear the user state
      navigate('/login'); // Redirect to login page
    }
  };

  return (
    <Navbar
      className="navbar shadow-sm"
      expand="lg"
      style={{
        position: 'fixed',
        width: '100%',
        top: '0',
        zIndex: '1000',
        background: '#181818',
        borderBottom: 'none',
        boxShadow: '0 2px 16px rgba(0,0,0,0.10)'
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" style={{
          display: 'flex',
          alignItems: 'center',
          fontWeight: 800,
          fontSize: '2rem',
          color: '#fff',
          letterSpacing: '1px'
        }}>
          <img
            src={logo}
            alt="Logo"
            style={{
              marginTop: '-6px',
              maxHeight: '44px',
              marginRight: '12px',
              filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.10))'
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{
          border: 'none',
          background: 'transparent'
        }} />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="link mr-auto" style={{ alignItems: 'center', gap: '0.5rem', marginLeft: 'auto' }}>
            <Nav.Link as={Link} to="/" style={{
              color: '#fff',
              fontWeight: 600,
              fontSize: '1.1rem',
              marginRight: '1.2rem',
              letterSpacing: '0.5px',
              borderRadius: '20px',
              padding: '0.5rem 1.2rem',
              transition: 'background 0.2s, color 0.2s'
            }}>HOME</Nav.Link>
            <Nav.Link as={Link} to="/about" style={{
              color: '#fff',
              fontWeight: 600,
              fontSize: '1.1rem',
              marginRight: '1.2rem',
              letterSpacing: '0.5px',
              borderRadius: '20px',
              padding: '0.5rem 1.2rem',
              transition: 'background 0.2s, color 0.2s'
            }}>ABOUT US</Nav.Link>
            <Nav.Link as={Link} to="/giftcards" style={{
              color: '#fff',
              fontWeight: 600,
              fontSize: '1.1rem',
              marginRight: '1.2rem',
              letterSpacing: '0.5px',
              borderRadius: '20px',
              padding: '0.5rem 1.2rem',
              transition: 'background 0.2s, color 0.2s'
            }}>GIFT CARDS</Nav.Link>
            <Nav.Link as={Link} to="/menu" style={{
              color: '#fff',
              fontWeight: 600,
              fontSize: '1.1rem',
              marginRight: '1.2rem',
              letterSpacing: '0.5px',
              borderRadius: '20px',
              padding: '0.5rem 1.2rem',
              transition: 'background 0.2s, color 0.2s'
            }}>MENU</Nav.Link>
            <Nav.Link as={Link} to="/orders" style={{
              color: '#fff',
              fontWeight: 600,
              fontSize: '1.1rem',
              marginRight: '1.2rem',
              letterSpacing: '0.5px',
              borderRadius: '20px',
              padding: '0.5rem 1.2rem',
              transition: 'background 0.2s, color 0.2s'
            }}>ORDERS</Nav.Link>
          </Nav>
          <Nav className="ml-auto" style={{ alignItems: 'center', gap: '0.5rem' }}>
            {user && (
              <>
                <span className="navbar-text" style={{
                  fontWeight: 'bold',
                  color: '#fff',
                  marginRight: '10px',
                  background: '#232323',
                  borderRadius: '20px',
                  padding: '0.4rem 1rem'
                }}>
                  Welcome, {user.firstName}
                </span>
                <Nav.Link as={Link} to="#" onClick={handleLogout} style={{
                  fontWeight: 'bold',
                  color: '#fff',
                  background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)',
                  borderRadius: '20px',
                  padding: '0.4rem 1.2rem',
                  marginLeft: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                  transition: 'background 0.2s, color 0.2s'
                }}>LOGOUT</Nav.Link>
              </>
            )}
            {!user && (
              <>
                <Nav.Link as={Link} to="/login" style={{
                  fontWeight: 'bold',
                  color: '#fff',
                  background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100%)',
                  borderRadius: '20px',
                  padding: '0.4rem 1.2rem',
                  marginLeft: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                  transition: 'background 0.2s, color 0.2s'
                }}>LOGIN</Nav.Link>
                <Nav.Link as={Link} to="/signup" style={{
                  fontWeight: 'bold',
                  color: '#fff',
                  background: 'linear-gradient(90deg, #0d4888 0%, #1e90ff 100%)',
                  borderRadius: '20px',
                  padding: '0.4rem 1.2rem',
                  marginLeft: '0.5rem',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
                  transition: 'background 0.2s, color 0.2s'
                }}>SIGNUP</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
