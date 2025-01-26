import { PostList } from "../PostList/PostList";
import { Post } from "../types";
import classes from "./FeaturedPosts.module.css";

export const FeaturedPost = ({ posts }: { posts: Post[] }) => {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostList posts={posts} />
    </section>
  );
};
