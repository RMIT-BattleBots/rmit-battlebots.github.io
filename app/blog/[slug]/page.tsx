import { getPost } from '@/lib/posts'
import Link from 'next/link'

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;  // Await the params

  const post = await getPost(slug);

  if (!post) return <div>Post not found</div>;

  return (
    <div>
      <li key={post.slug}>
        <Link href={'/blog'}>{"BACK"}</Link>
      </li>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}
