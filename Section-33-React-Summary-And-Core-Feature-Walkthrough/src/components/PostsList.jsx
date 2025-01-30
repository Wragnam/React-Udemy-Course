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
      <ul className={classes.posts}>
        {postData.map((post) => (
          <Post key={post.id} text={post.body} name={post.author} />
        ))}
      </ul>
    </>
  );
}
