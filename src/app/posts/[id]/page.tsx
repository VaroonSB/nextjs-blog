import { PostContent } from "@/components/PostDetail/PostContent";
import { getPostData } from "../../../../utils/post-utils";

export const revalidate = 600;

export default async function PostDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const posts = getPostData((await params).id);
  return <PostContent post={posts} />;
}
