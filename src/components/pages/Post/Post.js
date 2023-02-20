import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Button, Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import { Link } from "react-router-dom";

function Post() {
	const { id } = useParams();
	const postInformation = useSelector((state) => getPostById(state, id))
	return (
		<Container>
			<Row className="justify-content-center">
			<Col md={8} className="d-flex justify-content-between">
				<h1>{postInformation.title} </h1>
				</Col>
				<Col md={4}>
					<div>
						<Link key={postInformation.id} to={"/post/edit/" + postInformation.id}>
							<Button variant="outline-info" className="m-2">
								Edit
							</Button>
						</Link>
						<Button variant="outline-danger">Delete</Button>
					</div>
				</Col>
			</Row>
			<Row>
				<Col md="auto">
					<p><b>Author:</b>
						{postInformation.author} </p>

					<p><b>Published: </b>
						{postInformation.publishedDate} </p>
						{postInformation.content}
				</Col>
			</Row>

		</Container>
	);
}

export default Post;