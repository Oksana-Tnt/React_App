import { useContext } from "react";
import { STATUS } from "../constants";
import Loader from "../components/Loader";
import { Container } from "react-bootstrap";
import Error from "../components/Error";
import PostList from "../components/PostList";
import { BlogContext } from "../context/context";

const BlogPage = () => {
  const { posts, status } = useContext(BlogContext);

  if (status === STATUS.PENDING) return <Loader />;
  else if (status === STATUS.RESOLVED) {
    return (
      <Container>
        <h1 className="text-center mb-3">Users</h1>
        <PostList posts={posts} />
      </Container>
    );
  } else if (status === STATUS.REJECTED) return <Error />;
};

export default BlogPage;
