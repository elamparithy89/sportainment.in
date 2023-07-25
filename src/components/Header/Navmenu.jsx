import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './Sportainment-logo.png';


function Navmenu() {
  return (
    <Navbar collapseOnSelect expand="lg" fixed="top" bg="light" variant="dark">
      <Container>
        <Navbar.Brand href="#home"><img
              alt="logo"
              src={Logo}
              width="200"
              height="auto"
              className="d-inline-block align-top"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="#about">About US</Nav.Link>
            <Nav.Link href="#services">Our Services</Nav.Link>
            <Nav.Link href="#gallery">Our Gallery</Nav.Link>
            <Nav.Link href="#clients">Our Clients</Nav.Link>
            <Nav.Link href="#partner">Clientele Partnership</Nav.Link>
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
 
          </Nav>
    
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navmenu;



            
       
            
         