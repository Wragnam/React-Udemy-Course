import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

export default function PostsList({ modalIsVisible, hideModalHandler }) {
  const [postData, setPostData] = useState([]);

  function addPostHandler(postData) {
    setPostData((prevData) => [
      { ...postData, id: new Date() + postData.body },
      ...prevData,
    ]);
  }

  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler} open={modalIsVisible}>
          <NewPost onCancel={hideModalHandler} onCreatePost={addPostHandler} />
        </Modal>
      )}
      {postData.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>No Posts Yet</h2>
          <p>Start adding some ....</p>
        </div>
      )}
      <ul className={classes.posts}>
        {postData.map((post) => (
          <Post key={post.id} text={post.body} name={post.author} />
        ))}
      </ul>
    </>
  );
}
