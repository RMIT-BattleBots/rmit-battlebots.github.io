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
    <main className="min-h-screen bg-[#0a0a0f] tech-grid relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Back Button */}
      <div className="max-w-5xl mx-auto px-6 lg:px-8 pt-12 relative z-10">
        <Link
          href="/blog"
          className="tech-card text-cyan-400 px-4 py-2 text-sm font-semibold tracking-wide uppercase hover:neon-border transition-all inline-block mb-12"
        >
          ← Back to Blog
        </Link>
      </div>

      <article className="max-w-5xl mx-auto px-6 lg:px-8 pb-24 relative z-10">
        {/* Header */}
        <header className="mb-12 border-b border-cyan-500/20 pb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight neon-glow">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-3 text-sm font-mono tracking-wide text-gray-500 mb-8">
            <time>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</time>
            <span className="text-cyan-400">•</span>
            <span>{post.author}</span>
          </div>

          {post.featuredImage && (
            <div className="relative w-full h-64 md:h-96 mt-12 overflow-hidden neon-border">
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
          className="prose prose-lg max-w-none prose-invert
            prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
            prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h1:neon-glow
            prose-p:text-gray-300 prose-p:leading-relaxed prose-p:text-lg
            prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
            prose-strong:text-white prose-strong:font-bold
            prose-code:text-cyan-400 prose-code:bg-[#1e293b] prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-mono prose-code:border prose-code:border-cyan-500/30
            prose-pre:bg-[#1e293b] prose-pre:text-gray-300 prose-pre:border prose-pre:border-cyan-500/30 prose-pre:p-4 prose-pre:rounded
            prose-img:my-12 prose-img:w-full prose-img:h-auto prose-img:rounded-lg prose-img:border-2 prose-img:border-cyan-500/30
            prose-blockquote:border-l-4 prose-blockquote:border-cyan-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-300 prose-blockquote:font-medium prose-blockquote:my-8 prose-blockquote:bg-[#1e293b]/50 prose-blockquote:py-2
            prose-ul:list-disc prose-ol:list-decimal prose-li:text-gray-300 prose-li:font-medium prose-li:mb-2
            prose-ul:space-y-2 prose-ol:space-y-2 prose-ul:marker:text-cyan-400
            prose-hr:border-cyan-500/30 prose-hr:my-12"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </main>
  );
}
