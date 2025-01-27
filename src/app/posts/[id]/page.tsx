import { PostContent } from "@/components/PostDetail/PostContent";
import { getPostData } from "../../../../utils/post-utils";

export const revalidate = 600;

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = getPostData((await params).id);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const post = getPostData((await params).id);
  return <PostContent post={post} />;
}
