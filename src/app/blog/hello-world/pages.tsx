import { posts } from '@/lib/posts';
import { notFound } from 'next/navigation';

type Props = {
  params: { slug: string };
};

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-blue-700">{post.title}</h1>
      <hr className="my-4 border-gray-300" />
      <p className="text-gray-800 leading-relaxed">{post.content}</p>
    </div>
  );
}