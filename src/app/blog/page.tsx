import Link from 'next/link';
import Image from 'next/image';
import { getAllBlogPosts } from '@/lib/blog';

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20 md:py-32">
        {/* Header */}
        <div className="mb-20">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight text-black mb-6 uppercase">
            Blog
          </h1>
          <div className="brutal-border bg-lavender-aesthetic p-6 brutal-shadow-sm max-w-2xl">
            <p className="text-lg text-black font-bold leading-tight">
              Build logs, competition highlights, and engineering insights from <span className="bg-purple-aesthetic px-2 py-1">ARC</span>.
            </p>
          </div>
        </div>

        {/* Blog Posts */}
        {posts.length === 0 ? (
          <div className="py-20 brutal-border bg-mint-aesthetic p-8 brutal-shadow-sm">
            <p className="text-black font-black text-lg">No posts yet. Check back soon.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {posts.map((post) => (
              <article key={post.slug} className="brutal-border bg-white p-8 brutal-shadow hover:translate-x-2 hover:translate-y-2 hover:shadow-none transition-all">
                <Link href={`/blog/${post.slug}`} className="group block">
                  {/* Featured Image */}
                  {post.featuredImage ? (
                    <div className="relative w-full h-64 md:h-96 mb-8 overflow-hidden brutal-border bg-black">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 896px"
                      />
                    </div>
                  ) : (
                    <div className="w-full h-64 md:h-96 mb-8 bg-teal-aesthetic brutal-border flex items-center justify-center">
                      <span className="text-8xl">🤖</span>
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="mb-4">
                    <div className="flex items-center gap-3 text-sm font-black tracking-wide text-black mb-4">
                      <time>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</time>
                      <span>•</span>
                      <span>{post.author}</span>
                    </div>
                    
                    <h2 className="text-4xl md:text-5xl font-black text-black mb-4 uppercase">
                      {post.title}
                    </h2>
                    
                    <p className="text-black font-bold leading-tight mb-6 text-lg">
                      {post.excerpt}
                    </p>
                    
                    <span className="brutal-border bg-purple-aesthetic text-black px-4 py-2 text-sm font-black tracking-wide uppercase brutal-shadow-sm inline-block group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none transition-all">
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
