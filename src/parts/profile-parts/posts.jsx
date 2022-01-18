import Post from "./post";
import postBlock from "../../styles/profile-parts/postBlock.module.css"

function Posts() {
  return (
    <div>
      <form className="posts">
        <h2>My posts</h2>
        <textarea></textarea>
        <button type="submit">send</button>
      </form>
      <div className={postBlock.postBlock}>
        <h3>Messages</h3>
        <Post message="hi" />
        <Post message="hi, i'm there" />
      </div>
    </div>
  );
}

export default Posts;
