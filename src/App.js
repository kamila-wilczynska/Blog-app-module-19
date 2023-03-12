import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home/Home";
import Post from "./components/pages/Post/Post";
import PostAdd from "./components/pages/PostAdd/PostAdd";
//import PostEdit from "./components/pages/PostEdit/PostEdit";
import About from "./components/pages/About/About";
import NotFound from "./components/pages/NotFound/NotFound";
import { Container } from "react-bootstrap";
import Header from "./components/views/Header/Header";
import Footer from "./components/views/Footer/Footer";
import EditPostForm from "./components/features/EditPostForm/EditPostForm";

function App() {
  return (
    <Container>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="/post/add" element={<PostAdd />} />
		<Route path="/post/edit/:id" element={<EditPostForm />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Container>
  );
}

export default App;
