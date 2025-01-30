import { useState } from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";
import Modal from "./Modal";

export default function PostsList({ modalIsVisible, hideModalHandler }) {
  return (
    <>
      {modalIsVisible && (
        <Modal onClose={hideModalHandler} open={modalIsVisible}>
          <NewPost onCancel={hideModalHandler} />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post name="Patrick" text="Hi" />
      </ul>
    </>
  );
}
