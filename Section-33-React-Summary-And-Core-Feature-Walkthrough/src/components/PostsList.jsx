import { useEffect, useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

export default function PostsList({ modalIsVisible, hideModalHandler }) {
  const [postData, setPostData] = useState([]);
  const [isFetching, setIsFetching] = useState(false);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    setPostData((prevData) => [
      { ...postData, id: new Date() + postData.body },
      ...prevData,
    ]);
  }

  useEffect(() => {
    async function getPosts() {
      setIsFetching(true);
      const resp = await fetch("http://localhost:8080/posts");
      const data = await resp.json();

      setPostData(data.posts);
      setIsFetching(false);
    }

    getPosts();
  }, []);

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler} open={modalIsVisible}>
          <NewPost onCancel={hideModalHandler} onCreatePost={addPostHandler} />
        </Modal>
      )}
      {!isFetching && postData.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No Posts Yet</h2>
          <p>Start adding some ....</p>
        </div>
      )}
      {!isFetching && postData.length > 0 && (
        <ul className={classes.posts}>
          {postData.map((post) => (
            <Post key={post.id} text={post.body} name={post.author} />
          ))}
        </ul>
      )}
      {isFetching && (
        <div style={{ textAlign: "center", color: "white" }}>
          <p>Loading posts ....</p>
        </div>
      )}
    </>
  );
}
