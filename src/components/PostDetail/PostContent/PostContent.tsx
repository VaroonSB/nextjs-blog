import { Post } from "@/components/Posts/types";
import { PostHeader } from "../PostHeader";
import classes from "./PostContent.module.css";
import ReactMarkdown, { Components } from "react-markdown";
import Image from "next/image";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import SyntaxHighlighter from "react-syntax-highlighter";

export const PostContent = ({ post }: { post: Post }) => {
  const customRenderers: Components = {
    p(paragraph) {
      const { node } = paragraph;
      if (
        node?.children?.[0]?.type === "element" &&
        node.children[0].tagName === "img"
      ) {
        const image = node.children[0].properties;
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.id}/${image.src}`}
              alt={(image.alt as string) ?? ""}
              width={600}
              height={300}
              layout="responsive"
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code) {
      return (
        <SyntaxHighlighter
          language={code.lang}
          style={atomDark}
          // eslint-disable-next-line react/no-children-prop
          children={code.children?.toString() as string}
        />
      );
    },
  };

  return (
    <article className={classes.content}>
      <PostHeader post={post} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};
