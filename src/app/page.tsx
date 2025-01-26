import { Hero } from "@/components/Hero";
import { Layout } from "@/components/Layout";
import { FeaturedPost } from "@/components/Posts/FeaturedPosts";

const DUMMY_POSTS = [
  {
    id: "p1",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework that provides a solution for server-side rendering, static site generation, and more.",
    date: "2022-02-10",
  },
  {
    id: "p2",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework that provides a solution for server-side rendering, static site generation, and more.",
    date: "2022-02-10",
  },
  {
    id: "p3",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework that provides a solution for server-side rendering, static site generation, and more.",
    date: "2022-02-10",
  },
  {
    id: "p4",
    title: "Getting Started with Next.js",
    image: "getting-started-nextjs.png",
    excerpt:
      "Next.js is a React framework that provides a solution for server-side rendering, static site generation, and more.",
    date: "2022-02-10",
  },
];

export default function Home() {
  return (
    <Layout>
      <Hero />
      <FeaturedPost posts={DUMMY_POSTS} />
    </Layout>
  );
}
