import { Col, Row } from "react-bootstrap";
import PostCard from "./PostCard";

const PostList = ({ posts }) => {
  return (
    <Row lg="auto" className="d-flex justify-content-center">
      {posts.map((post) => (
        <Col key={post.id} className="d-flex mb-5 justify-content-center">
          <PostCard {...post} />
        </Col>
      ))}
    </Row>
  );
};

export default PostList;
