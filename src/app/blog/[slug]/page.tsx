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
          className="brutal-border bg-black text-white px-4 py-2 text-sm font-black tracking-wide uppercase brutal-shadow-sm hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all inline-block mb-12"
        >
          ← Back to Blog
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-6 lg:px-8 pb-24">
        {/* Header */}
        <header className="mb-12 brutal-border-b pb-12">
          <h1 className="text-5xl md:text-6xl font-black text-black mb-6 leading-tight uppercase">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-3 text-sm font-black tracking-wide text-black mb-8">
            <time>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</time>
            <span>•</span>
            <span>{post.author}</span>
          </div>

          {post.featuredImage && (
            <div className="relative w-full h-64 md:h-96 mt-12 overflow-hidden brutal-border bg-black">
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
            prose-headings:text-black prose-headings:font-black prose-headings:tracking-tight prose-headings:uppercase
            prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl
            prose-p:text-black prose-p:leading-relaxed prose-p:font-bold prose-p:text-lg
            prose-a:text-black prose-a:no-underline prose-a:bg-yellow-300 prose-a:px-1 prose-a:font-black
            prose-strong:text-black prose-strong:font-black
            prose-code:text-black prose-code:bg-cyan-400 prose-code:px-2 prose-code:py-1 prose-code:font-black prose-code:brutal-border prose-code:border-2
            prose-pre:bg-black prose-pre:text-white prose-pre:brutal-border prose-pre:border-4 prose-pre:p-4
            prose-img:my-12 prose-img:w-full prose-img:h-auto prose-img:brutal-border prose-img:border-4
            prose-blockquote:border-l-4 prose-blockquote:border-black prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-black prose-blockquote:font-bold prose-blockquote:my-8 prose-blockquote:bg-yellow-300 prose-blockquote:py-2
            prose-ul:list-none prose-ol:list-none prose-li:text-black prose-li:font-bold prose-li:mb-2
            prose-ul:space-y-2 prose-ol:space-y-2
            prose-hr:border-black prose-hr:border-4 prose-hr:my-12"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </main>
  );
}
