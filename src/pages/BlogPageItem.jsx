import { useContext } from "react";
import { useParams } from "react-router";
import { BlogContext } from "../context/context";

const BlogPageItem = () => {
  const { id } = useParams();
  const { posts } = useContext(BlogContext);

  const post = posts.find((post) => post.id === Number(id));
  console.log(post);

  return (
    <>
      <h2>{post.title} </h2>
      <p>{post.body} </p>
    </>
  );
};

export default BlogPageItem;
