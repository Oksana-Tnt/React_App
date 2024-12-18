import { useEffect, useState } from "react";
import { apiUrl, STATUS } from "../constants";
import { BlogContext } from "./context";

export function BlogProvider({ children }) {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);

  useEffect(() => {
    const getPosts = async () => {
      try {
        setStatus(STATUS.PENDING);

        const response = await fetch(apiUrl);

        if (!response.ok) {
          setStatus(STATUS.REJECTED);
          throw new Error(`Errore: ${response.status}`);
        }
        const data = await response.json();
        setPosts(data);
        setStatus(STATUS.RESOLVED);
      } catch (err) {
        console.log(err.message);
        setStatus(STATUS.REJECTED);
      }
    };
    getPosts();
  }, [setStatus]);

  return (
    <BlogContext.Provider value={{ posts, status }}>
      {children}
    </BlogContext.Provider>
  );
}

export default BlogProvider;
