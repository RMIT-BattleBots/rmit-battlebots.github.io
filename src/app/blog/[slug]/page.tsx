import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog';
import { remark } from 'remark';
import remarkGfm from 'remark-gfm';
import remarkHtml from 'remark-html';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

async function markdownToHtml(markdown: string): Promise<string> {
  const processedContent = await remark()
    .use(remarkGfm)
    .use(remarkHtml)
    .process(markdown);
  return processedContent.toString();
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const htmlContent = await markdownToHtml(post.content);

  return (
    <main className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 text-sm font-light tracking-wide mb-12 transition-colors"
        >
          ← Back to Blog
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-6 lg:px-8 pb-24">
        {/* Header */}
        <header className="mb-12 border-b border-gray-100 pb-12">
          <h1 className="text-4xl md:text-5xl font-light tracking-tight text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-3 text-xs font-light tracking-wide text-gray-500">
            <time>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</time>
            <span>•</span>
            <span>{post.author}</span>
          </div>

          {post.featuredImage && (
            <div className="relative w-full h-64 md:h-96 mt-12 overflow-hidden bg-gray-50">
              <Image
                src={post.featuredImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 896px"
              />
            </div>
          )}
        </header>

        {/* Content */}
        <div 
          className="prose prose-lg max-w-none
            prose-headings:text-gray-900 prose-headings:font-light prose-headings:tracking-tight
            prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:font-light
            prose-a:text-gray-900 prose-a:no-underline hover:prose-a:underline prose-a:border-b prose-a:border-gray-300 hover:prose-a:border-gray-900
            prose-strong:text-gray-900 prose-strong:font-normal
            prose-code:text-gray-900 prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:font-light
            prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-none prose-pre:border prose-pre:border-gray-200
            prose-img:my-12 prose-img:w-full prose-img:h-auto
            prose-blockquote:border-l prose-blockquote:border-gray-300 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600 prose-blockquote:font-light prose-blockquote:my-8
            prose-ul:list-none prose-ol:list-none prose-li:text-gray-700 prose-li:font-light prose-li:mb-2
            prose-ul:space-y-2 prose-ol:space-y-2
            prose-hr:border-gray-200 prose-hr:my-12"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </main>
  );
}
