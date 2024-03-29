//import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
//import { dateToStr} from "../../../utils/dateToStr";

import { useDispatch, useSelector } from "react-redux";
import { getPostById } from "../../../redux/postsRedux";
import { Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import RemovePostModal from "../../features/Modal/RemovePostModal";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { removePost } from "../../../redux/postsRedux";


const Post = (props) => {
	const { id } = useParams();
	const postContent = useSelector((state) => getPostById(state, id));
	const [modal, setModal] = useState(false);
	const closeModal = () => setModal(false);
	const openModal = () => setModal(true);
	const dispatch = useDispatch();
	const deletePost = (e) => {
		e.preventDefault();
		dispatch(removePost(postContent.id));
		setModal(false);
	}
	if (modal) {
		return <RemovePostModal show={modal} closeModal={closeModal} deletePost={deletePost} />;
	  }
	  if (!postContent) {
		return <Navigate to="/" />;
	  } else 
		return (
			<>
				<Row className="justify-content-center">
					<Col md={8} className="d-flex justify-content-between">
						<h1>{postContent.title}</h1>
						<div>
							<Link key={postContent.id} to={"/post/edit/" + postContent.id}>
								<Button variant="outline-info" className="m-2">
									Edit
								</Button>
							</Link>
							<Button variant="outline-danger" onClick={openModal}>
								Delete
								</Button>
								
						</div>
					</Col>
				</Row>
				<Row className="justify-content-center">
          <Col md={8}>
            <p>
              <b>Author: </b>
              {postContent.author}
            </p>
            <p>
			<b>Published:</b> {postContent.published}
            </p>
            <p>{postContent.content}</p>
          </Col>
        </Row>
      </>
    );
};


	export default Post;