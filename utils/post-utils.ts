import { Post } from "@/components/Posts/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export const getPostData = (postId: string): Post => {
  postId = postId.replace(/\.md$/, "");
  const fileContent = fs.readFileSync(
    path.join(process.cwd(), "data", "posts", `${postId}.md`),
    "utf-8"
  );
  const { data, content } = matter(fileContent);

  return {
    id: postId,
    title: data.title,
    excerpt: data.excerpt,
    date: data.date,
    image: data.image,
    isFeatured: data.isFeatured,
    content,
  };
};

export const getAllPosts = (): Post[] => {
  const postFiles = fs.readdirSync(path.join(process.cwd(), "data", "posts"));

  return postFiles
    .map((post) => getPostData(post))
    .sort((postA, postB) => (postA.date > postB.date ? -1 : 1));
};

export const featuredPosts = (): Post[] => {
  return getAllPosts().filter((post) => post.isFeatured);
};
