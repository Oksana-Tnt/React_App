import { Col, Row } from "react-bootstrap";
import UserCard from "./UserCard";

const UserList = ({ users }) => {
  return (
    <Row lg="auto" className="d-flex justify-content-center">
      {users.map((user) => (
        <Col key={user.id} className="d-flex mb-5 justify-content-center">
          <UserCard {...user} />
        </Col>
      ))}
    </Row>
  );
};

export default UserList;
