import Container from 'react-bootstrap/Container';
import PostCard from '../../features/PostCard/PostCard';

function Home() {
	return (
	  <Container>
		<h1>All posts</h1>
		<PostCard/>
	  </Container>
	);
  }
  
  export default Home;