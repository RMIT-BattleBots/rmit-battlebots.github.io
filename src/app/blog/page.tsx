import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen bg-stone-300">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 md:py-32">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-6xl font-light tracking-tight text-stone-900 mb-4">
            Blog
          </h1>
          <p className="text-lg text-stone-800 font-light leading-relaxed max-w-2xl">
            Build logs, competition highlights, and engineering insights from ARC.
          </p>
        </div>

        {/* Blog Posts */}
        {posts.length === 0 ? (
          <div className="py-20">
            <p className="text-stone-700 font-light">No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="space-y-16">
            {posts.map((post) => (
              <article key={post.slug} className="border-b border-stone-400/30 pb-16 last:border-0">
                <Link href={`/blog/${post.slug}`} className="group block">
                  {/* Featured Image */}
                  {post.featuredImage ? (
                    <div className="relative w-full h-64 md:h-96 mb-8 overflow-hidden bg-stone-200">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:opacity-90 transition-opacity"
                        sizes="(max-width: 768px) 100vw, 896px"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-64 md:h-96 mb-8 bg-stone-200 flex items-center justify-center">
                      <span className="text-6xl opacity-30">🤖</span>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 text-xs font-light tracking-wide text-stone-700 mb-4">
                      <time>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</time>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl font-light text-stone-900 mb-4 group-hover:text-stone-800 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-stone-800 font-light leading-relaxed mb-6">
                      {post.excerpt}
                    </p>
                    
                    <span className="text-sm font-light tracking-wide text-stone-900 group-hover:underline">
                      Read more →
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
