import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";

function ColorSchemesExample() {
  return (
    <>
      
     
      <Navbar bg="primary" variant="dark" expand="lg" className="mt-4 mb-4 rounded">
        <Container>
          <Navbar.Brand href="#home">Blog.app</Navbar.Brand>
          <Row>
		  <Nav className="me-auto">
            <Col>
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
			</Col>
			<Col>
			<Nav.Link as={NavLink} to="/about">About</Nav.Link>
			</Col>
          </Nav>
		  </Row>
        </Container>
      </Navbar>

    </>
  );
}

export default ColorSchemesExample;