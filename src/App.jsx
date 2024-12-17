import { apiUrl, STATUS } from "./constants";
import { useEffect, useState } from "react";
import Error from "./components/Error";
import Loader from "./components/Loader";
import UserList from "./components/UserList";
import { Container } from "react-bootstrap";

function App() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  const getUsers = async () => {
    try {
      setStatus(STATUS.PENDING);

      const response = await fetch(apiUrl);

      if (!response.ok) {
        setStatus(STATUS.REJECTED);
        throw new Error(`Errore: ${response.status}`);
      }
      const data = await response.json();
      setUsers(data);
      setStatus(STATUS.RESOLVED);
    } catch (err) {
      console.log(err.message);
      setStatus(STATUS.REJECTED);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      getUsers();
    }, 3000);
  }, []);

  if (status === STATUS.PENDING) return <Loader />;
  else if (status === STATUS.RESOLVED) {
    return (
      <Container>
        <h1 className="text-center mb-3">Users</h1>
        <UserList users={users} />
      </Container>
    );
  } else if (status === STATUS.REJECTED) return <Error />;
}

export default App;
