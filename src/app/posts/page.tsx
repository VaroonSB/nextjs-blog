import { PostList } from "@/components/Posts/PostList";
import { getAllPosts } from "../../../utils/post-utils";

export const revalidate = 600;

export default function Posts() {
  return <PostList posts={getAllPosts()} page="plp" />;
}
