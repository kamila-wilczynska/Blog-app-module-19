import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { useState } from 'react';

function AddPostForm(props) {

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [title, setTitle] = useState("");
	const [author, setAuthor] = useState("");
	const [published, setPublished] = useState("");
	const [shortDescription, setshortDescription] = useState("");
	const [content, setContent] = useState("");

	return (
		<>
			<Row className="justify-content-md-center">
				<Col xs={12} md={10} >
					<Form>
						<Col md={6}>

							<Form.Group className="mb-3" controlId="title">
								<Form.Label>Title</Form.Label>
								<Form.Control type="email" placeholder="Enter title" 
								onChange={(e) => setTitle(e.target.value)}/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="Author">
								<Form.Label>Author</Form.Label>
								<Form.Control type="email" placeholder="Enter author" 
								onChange={(e) => setAuthor(e.target.value)}/>
							</Form.Group>

							<Form.Group className="mb-3" controlId="formBasicPassword">
								<Form.Label>Published</Form.Label>
								<Form.Control type="password" placeholder="Enter date" 
								onChange={(e) => setPublished(e.target.value)}/>
							</Form.Group>
						</Col>

						<Form.Group className="mb-3" controlId="descriptionForm">
							<Form.Label>Short description</Form.Label>
							<Form.Control
								type="text"
								as="textarea"
								rows={3}
								placeholder="Enter description" 
								onChange={(e) => setshortDescription(e.target.value)}/>
						</Form.Group>


						<Form.Group className="mb-3" controlId="ContentForm">
							<Form.Label>Main Content</Form.Label>
							<Form.Control type="text"
								as="textarea"
								rows={6}
								placeholder="Enter content" 
								onChange={(e) => setContent(e.target.value)}
								/>
						</Form.Group>
						
						<Button variant="primary" type="submit">
							Add Post
						</Button>
						
					</Form>
				</Col>
			</Row>
		</>
	);
}



export default AddPostForm;