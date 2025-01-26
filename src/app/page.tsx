import { Hero } from "@/components/Hero";
import { PostList } from "@/components/Posts/PostList";

const DUMMY_POSTS = [
  {
    id: "p1",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework that provides a solution for server-side rendering, static site generation, and more.",
    date: "2022-02-10",
    content:
      "# This is a first post\n\nAnd this is the content of the first post",
  },
  {
    id: "p2",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework that provides a solution for server-side rendering, static site generation, and more.",
    date: "2022-02-10",
    content:
      "# This is a first post\n\nAnd this is the content of the first post",
  },
  {
    id: "p3",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework that provides a solution for server-side rendering, static site generation, and more.",
    date: "2022-02-10",
    content:
      "# This is a first post\n\nAnd this is the content of the first post",
  },
  {
    id: "p4",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework that provides a solution for server-side rendering, static site generation, and more.",
    date: "2022-02-10",
    content:
      "# This is a first post\n\nAnd this is the content of the first post",
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <PostList posts={DUMMY_POSTS} page="featured_posts" />
    </>
  );
}
