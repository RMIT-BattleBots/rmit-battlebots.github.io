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
    <main className="min-h-screen bg-[#f5f3f0]">
      {/* Back Button */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 pt-12">
        <Link
          href="/blog"
          className="inline-flex items-center text-[#C40F0F] hover:text-[#a00d0d] text-base font-light tracking-wide mb-12 transition-colors hover:underline"
        >
          ← Back to Blog
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-6 lg:px-8 pb-32">
        {/* Header */}
        <header className="mb-16 border-b border-[#C40F0F]/30 pb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-stone-900 mb-8 leading-tight">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-3 text-sm font-light tracking-wide text-stone-600 mb-8">
            <time>{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</time>
            <span className="text-[#C40F0F]/40">•</span>
            <span>{post.author}</span>
          </div>

          {post.featuredImage && (
            <div className="relative w-full h-64 md:h-96 mt-12 overflow-hidden bg-stone-200 rounded-sm shadow-md">
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
          className="prose prose-lg prose-stone max-w-none
            prose-headings:text-stone-900 prose-headings:font-light prose-headings:tracking-tight prose-headings:leading-tight
            prose-h1:text-4xl prose-h1:mb-8 prose-h1:mt-12 prose-h1:text-[#C40F0F]
            prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-10 prose-h2:text-[#C40F0F]
            prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-[#C40F0F]
            prose-p:text-stone-700 prose-p:leading-relaxed prose-p:font-light prose-p:text-lg prose-p:mb-6
            prose-a:text-[#C40F0F] prose-a:no-underline hover:prose-a:underline prose-a:border-b-2 prose-a:border-[#C40F0F]/30 hover:prose-a:border-[#C40F0F] prose-a:font-normal
            prose-strong:text-stone-900 prose-strong:font-normal
            prose-code:text-stone-900 prose-code:bg-red-50 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm prose-code:font-light prose-code:border prose-code:border-[#C40F0F]/20 prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-stone-900 prose-pre:text-stone-100 prose-pre:rounded-sm prose-pre:border prose-pre:border-stone-400 prose-pre:p-6 prose-pre:overflow-x-auto
            prose-img:my-12 prose-img:w-full prose-img:h-auto prose-img:rounded-sm prose-img:shadow-md
            prose-blockquote:border-l-4 prose-blockquote:border-[#C40F0F] prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-stone-600 prose-blockquote:font-light prose-blockquote:my-8 prose-blockquote:text-lg prose-blockquote:bg-red-50/50 prose-blockquote:py-2 prose-blockquote:rounded-r-sm
            prose-ul:list-disc prose-ol:list-decimal prose-li:text-stone-700 prose-li:font-light prose-li:mb-3 prose-li:text-lg prose-li:leading-relaxed
            prose-ul:space-y-2 prose-ol:space-y-2 prose-ul:pl-6 prose-ol:pl-6 prose-ul:marker:text-[#C40F0F] prose-ol:marker:text-[#C40F0F]
            prose-hr:border-[#C40F0F]/30 prose-hr:my-12"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>
    </main>
  );
}
