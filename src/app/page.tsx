import { Hero } from "@/components/Hero";
import { PostList } from "@/components/Posts/PostList";
import { featuredPosts } from "../../utils/post-utils";

export const revalidate = 600;

export default function Home() {
  const posts = featuredPosts();
  return (
    <>
      <Hero />
      <PostList posts={posts} page="featured_posts" />
    </>
  );
}
