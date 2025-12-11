import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen bg-stone-300 relative overflow-hidden">
      {/* Decorative Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="decorative-shape shape-circle w-72 h-72 top-1/4 -left-36 animate-float-slow"></div>
        <div className="decorative-shape shape-square w-56 h-56 bottom-1/4 -right-28 animate-float delay-400"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-24 md:py-32 relative z-10">
        {/* Header */}
        <div className="mb-24 animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-stone-900 mb-6 leading-tight">
            Blog
          </h1>
          <p className="text-lg md:text-xl text-stone-800 font-light leading-relaxed max-w-3xl">
            Build logs, competition highlights, and engineering insights from ARC.
          </p>
        </div>

        {/* Blog Posts */}
        {posts.length === 0 ? (
          <div className="py-20 animate-fade-in-up delay-200">
            <p className="text-stone-700 font-light text-lg">No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="space-y-20">
            {posts.map((post, index) => (
              <article 
                key={post.slug} 
                className="border-b border-stone-400/40 pb-20 last:border-0 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <Link href={`/blog/${post.slug}`} className="group block">
                  {/* Featured Image */}
                  {post.featuredImage ? (
                    <div className="relative w-full h-64 md:h-96 mb-10 overflow-hidden bg-stone-200 rounded-sm group-hover:scale-[1.01] transition-transform duration-500 shadow-sm">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:opacity-90 transition-opacity duration-500"
                        sizes="(max-width: 768px) 100vw, 896px"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-64 md:h-96 mb-10 bg-stone-200 flex items-center justify-center rounded-sm group-hover:scale-[1.01] transition-transform duration-500 shadow-sm">
                      <span className="text-6xl opacity-30">🤖</span>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 text-sm font-light tracking-wide text-stone-700 mb-6">
                      <time>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</time>
                      <span className="text-stone-400">•</span>
                      <span>{post.author}</span>
                    </div>
                    
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-stone-900 mb-6 leading-tight group-hover:text-stone-800 transition-colors duration-300">
                      {post.title}
                    </h2>
                    
                    <p className="text-lg text-stone-800 font-light leading-relaxed mb-8 max-w-3xl">
                      {post.excerpt}
                    </p>
                    
                    <span className="text-base font-light tracking-wide text-stone-900 group-hover:underline inline-flex items-center gap-2 transition-all duration-300 group-hover:translate-x-2">
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
