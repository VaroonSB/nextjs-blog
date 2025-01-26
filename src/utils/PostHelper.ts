import { Post } from "@/components/Posts/types";

export const getPostImagePath = (post: Post) =>
  `/images/posts/${post.id}/${post.image}`;
