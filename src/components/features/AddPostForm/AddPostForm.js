import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap'; 

function AddPostForm() {
  return (
	<>
	<Row className="justify-content-md-center">
	<Col xs={12} md={10} >
	<Form>
	<Col md={6}>
    
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>
        <Form.Control type="email" placeholder="Enter title" />
      </Form.Group>

	  <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Author</Form.Label>
        <Form.Control type="email" placeholder="Enter author" />   
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Published</Form.Label>
        <Form.Control type="password" placeholder="Enter date" />
      </Form.Group>
     </Col> 

	  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Short description</Form.Label>
        <Form.Control type="password" placeholder="Enter description" />
      </Form.Group>
      

	  <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Main Content</Form.Label>
        <Form.Control type="password" placeholder="Enter content" />
      </Form.Group>
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
	</Col>
	</Row>
	</>
  );
}



export default AddPostForm;