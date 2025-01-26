import { PostItem } from "../PostItem";
import { Post } from "../types";
import classes from "./PostGrid.module.css";

export const PostGrid = ({ posts }: { posts: Post[] }) => {
  return (
    <ul className={classes.grid}>
      {posts.map((post) => (
        <PostItem key={post.id} post={post} />
      ))}
    </ul>
  );
};
