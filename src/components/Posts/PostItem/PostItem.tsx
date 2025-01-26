import Image from "next/image";
import { Post } from "../types";
import Link from "next/link";
import classes from "./PostItem.module.css";

export const PostItem = ({ post }: { post: Post }) => {
  return (
    <li className={classes.post}>
      <Link href={`/posts/${post.id}`}>
        <div className={classes.image}>
          <Image
            src={`/images/posts/${post.id}/${post.image}`}
            alt={post.title}
            width={300}
            height={200}
            layout="responsive"
          />
        </div>
        <div className={classes.content}>
          <h3>{post.title}</h3>
          <time>
            {new Date(post.date).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
          <p>{post.excerpt}</p>
        </div>
      </Link>
    </li>
  );
};
