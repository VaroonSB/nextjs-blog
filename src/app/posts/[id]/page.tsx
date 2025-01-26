import { PostContent } from "@/components/PostDetail/PostContent";

const DUMMY_POST = {
  id: "p1",
  title: "Getting Started with Next.js",
  image: "getting-started-nextjs.png",
  excerpt:
    "Next.js is a React framework that provides a solution for server-side rendering, static site generation, and more.",
  date: "2022-02-10",
  content:
    "# This is a first post\n\nAnd this is the content of the first post",
};

export default function PostDetailPage() {
  return <PostContent post={DUMMY_POST} />;
}
