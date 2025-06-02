import Link from 'next/link';
import { posts } from '@/lib/posts'; 

export default function BlogPage() {
  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">블로그 글 목록</h1>
      {posts.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="block mb-4 p-5 border rounded-lg shadow-sm hover:shadow-md transition"
        >
          <h2 className="text-xl font-semibold text-blue-600">{post.title}</h2>
          <p className="text-gray-700 mt-2">{post.content}</p>
        </Link>
      ))}
    </div>
  );
}