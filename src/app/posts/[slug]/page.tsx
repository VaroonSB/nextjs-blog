export default function PostDetailPage({
  params,
}: {
  params: { slug: string[] };
}) {
  return <div>Post Details {params.slug}</div>;
}
