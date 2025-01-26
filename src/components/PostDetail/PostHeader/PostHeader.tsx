import { Post } from "@/components/Posts/types";
import Image from "next/image";
import classes from "./PostHeader.module.css";
import { getPostImagePath } from "../../../utils/postHelper";

export const PostHeader = ({ post }: { post: Post }) => {
  return (
    <header className={classes.header}>
      <h1>{post.title}</h1>
      <Image
        src={getPostImagePath(post)}
        alt={post.title}
        width={200}
        height={150}
      />
    </header>
  );
};
