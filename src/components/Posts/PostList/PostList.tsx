import { PostGrid } from "../PostGrid/PostGrid";
import { Post } from "../types";
import featuredPostClasses from "./FeaturedPosts.module.css";
import allPostClasses from "./AllPosts.module.css";

export const PostList = ({
  posts,
  page,
}: {
  posts: Post[];
  page: "plp" | "featured_posts";
}) => {
  const classes = page === "plp" ? allPostClasses : featuredPostClasses;
  return (
    <section className={classes.posts}>
      {page === "plp" && <h1>All Posts</h1>}
      {page === "featured_posts" && <h2>Featured Posts</h2>}
      <PostGrid posts={posts} />
    </section>
  );
};
