import { Post } from "@/components/Posts/types";
import { PostHeader } from "../PostHeader";
import classes from "./PostContent.module.css";
import ReactMarkdown from "react-markdown";

export const PostContent = ({ post }: { post: Post }) => {
  return (
    <article className={classes.content}>
      <PostHeader post={post} />
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
};
