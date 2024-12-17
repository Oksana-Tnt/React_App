import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function UserCard({
  name,
  username,
  email,
  address: { street, suite, city, zipcode },
  phone,
  website,
}) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title className="fs-5">{name}</Card.Title>

        <ListGroup className="list-group-flush">
          <Card.Text className="text-secondary fs-5">Username</Card.Text>
          <ListGroup.Item className="fs-5">{username}</ListGroup.Item>

          <Card.Text className="text-secondary fs-5">Email</Card.Text>
          <ListGroup.Item>{email}</ListGroup.Item>

          <Card.Text className="text-secondary fs-5">Address</Card.Text>
          <ListGroup.Item>
            {street}, {suite}, {city}, {zipcode}
          </ListGroup.Item>

          <Card.Text className="text-secondary fs-5">Phone</Card.Text>
          <ListGroup.Item>{phone}</ListGroup.Item>

          <Card.Text className="text-secondary fs-5">Website</Card.Text>
          <ListGroup.Item>{website}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  );
}

export default UserCard;
