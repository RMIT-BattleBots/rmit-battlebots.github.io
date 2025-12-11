import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen bg-[#0a0a0f] tech-grid relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 md:py-32 relative z-10">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 neon-glow">
            Blog
          </h1>
          <div className="tech-card p-6 max-w-2xl">
            <p className="text-lg text-gray-300 leading-relaxed">
              Build logs, competition highlights, and engineering insights from <span className="text-cyan-400 font-semibold">ARC</span>.
            </p>
          </div>
        </div>

        {/* Blog Posts */}
        {posts.length === 0 ? (
          <div className="py-20 tech-card p-8 text-center">
            <p className="text-gray-400 text-lg">No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="tech-card p-8 hover:neon-border transition-all group">
                <Link href={`/blog/${post.slug}`} className="block">
                  {/* Featured Image */}
                  {post.featuredImage ? (
                    <div className="relative w-full h-64 md:h-96 mb-8 overflow-hidden neon-border">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, 896px"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-64 md:h-96 mb-8 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 neon-border flex items-center justify-center">
                      <span className="text-8xl opacity-50">🤖</span>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 text-xs font-mono tracking-wide text-gray-500 mb-4">
                      <time>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</time>
                      <span className="text-cyan-400">•</span>
                      <span>{post.author}</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                      {post.excerpt}
                    </p>
                    
                    <span className="text-cyan-400 font-semibold tracking-wide uppercase text-sm inline-flex items-center gap-2 group-hover:neon-glow transition-all">
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
