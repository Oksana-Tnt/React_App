import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { NavLink } from "react-router";

function PostCard({ id, title, body }) {
  return (
    <NavLink to={`/blog/${id}`} className="text-decoration-none">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title className="fs-5">{title}</Card.Title>

          <ListGroup className="list-group-flush">
            <ListGroup.Item className="fs-5">{body}</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
    </NavLink>
  );
}

export default PostCard;
